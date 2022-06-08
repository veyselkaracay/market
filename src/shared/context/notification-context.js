import React, { createContext, useContext, useReducer } from "react";
import { v4 } from "uuid";
import PushNotification from "../../components/ui/PushNotification";

const NotificationContext = createContext();

const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <NotificationContext.Provider value={dispatch}>
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end p-4 pointer-events-none sm:py-8 sm:px-10 sm:items-start z-50"
      >
        <div className="flex-grow flex flex-col">
          {state.map((note) => {
            return (
              <PushNotification dispatch={dispatch} key={note.id} {...note} />
            );
          })}
        </div>
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const dispatch = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        ...props,
      },
    });
  };
};

export default NotificationProvider;

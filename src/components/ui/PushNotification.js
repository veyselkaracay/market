import React, { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationIcon,
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";

const PushNotification = (props) => {
  const [show, setShow] = useState(true);

  const handleStartTimer = () => {
    setTimeout(() => {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
      setShow(false);
    }, (props.duration || 5) * 1000);
  };

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end mt-2">
        <Transition
          show={show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="p-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {props.type === "SUCCESS" && (
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  )}
                  {props.type === "WARNING" && (
                    <ExclamationIcon
                      className="h-6 w-6 text-yellow-400"
                      aria-hidden="true"
                    />
                  )}
                  {props.type === "ERROR" && (
                    <XCircleIcon
                      className="h-6 w-6 text-red-400"
                      aria-hidden="true"
                    />
                  )}
                  {props.type === "INFO" && (
                    <InformationCircleIcon
                      className="h-6 w-6 text-blue-400"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="flex-1 ml-3 pt-0.5 space-y-1">
                  <p className="text-sm font-semibold text-gray-700">
                    {props.title}
                  </p>
                  <p className="text-sm font-normal text-gray-700">
                    {props.message}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default PushNotification;

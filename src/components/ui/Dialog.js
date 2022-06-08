import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const buttonStyles =
  "w-full inline-flex justify-center rounded-lg border shadow-sm px-4 py-2 font-medium focus:ring-0 text-sm transition-all duration-150 ease-in-out";

const DialogModal = (props) => {
  return (
    <Transition.Root show={props.show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={props.onClose}
      >
        <div className="flex items-center justify-center text-center h-screen w-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-10 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="w-full max-w-md inline-block align-middle text-left p-6 m-6 2xl:mb-20 space-y-3 sm:space-y-6 rounded-xl backdrop-blur-2xl shadow-2xl overflow-hidden bg-opacity-70 border border-gray-50 bg-gray-100">
              <>
                <div className="space-y-3 sm:space-y-6">
                  {props.icon && props.icon.component && (
                    <div
                      className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full shadow-md bg-${props.icon.color}-500 bg-opacity-5`}
                    >
                      <props.icon.component
                        className={`h-6 w-6 text-${props.icon.color}-500`}
                      />
                    </div>
                  )}
                  <div className="text-center space-y-3 sm:space-y-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {props.title}
                    </h3>
                    <div className="text-left">
                      <span className="text-sm text-gray-600">
                        {props.text}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-${
                    props.buttons.length + 1
                  } gap-3 mt-3 sm:mt-0`}
                >
                  <button
                    type="button"
                    className={`${buttonStyles} border-gray-300 bg-white hover:bg-gray-50 active:bg-gray-200 text-gray-700`}
                    onClick={props.onClose}
                  >
                    Kapat
                  </button>
                  {props.buttons.length > 0 ? (
                    props.buttons.map((button, index) => (
                      <button
                        key={`${index}`}
                        type="button"
                        className={`${buttonStyles}
              } border-transparent bg-${button.color}-500 hover:bg-${button.color}-600 active:bg-${button.color}-400 text-white`}
                        onClick={button.onClick}
                      >
                        {button.label}
                      </button>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DialogModal;

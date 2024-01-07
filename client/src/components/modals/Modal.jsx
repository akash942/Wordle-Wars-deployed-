import { useState } from "react";

export default function Modal({ children,display, header, body, handleClose }) {

  const [showModal, setShowModal] = useState(false)
  
  if (!display && !showModal) {
    return null;
  } else {
    return (
      <>
        <div className="w-75 h-[14rem] bg-[#161112] flex flex-col space-y-3 items-center p-4">
          <button
            onClick={(e)=>handleClose(e)}
            type="button"
            class="self-end"
            data-modal-hide="default-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            {header}
          </div>
          <div class="">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {body}
                </p>
            </div>
            <div className="bg-red">
            {children}
            </div>
        </div>
      </>
    );
  }
}

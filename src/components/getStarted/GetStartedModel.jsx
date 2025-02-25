import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export const GetStartedModel = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4">
          <div
            className="flex flex-col text-white gap-2 max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="place-self-end text-white p-1 bg-custom-yellow"
              aria-label="Close"
              onClick={handleClose}
            >
              <IoMdClose />
            </button>
            <div className="bg-custom-yellow rounded-xl px-4 py-6 flex flex-col gap-2">
              <h1 className="text-xl font-extrabold">How to get started?</h1>
              <p>
                Welcome to our platform! To get started, explore our features,
                set up your profile, and start discovering content tailored just
                for you. We're here to help you every step of the way. Enjoy
                your journey with us!
              </p>

              <div>
                <button
                  className="bg-white text-custom-yellow font-bold py-2 px-4 rounded"
                  onClick={handleClose}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

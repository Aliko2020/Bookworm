import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import construction from "../../assets/images/construction.png";

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
            className="flex flex-col gap-2 max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="place-self-end p-1 bg-custom-gray"
              aria-label="Close"
              onClick={handleClose}
            >
              <IoMdClose />
            </button>
            <div className="bg-custom-gray rounded-xl px-4 py-6 flex flex-col justify-center items-center gap-4 min-w-xl">
              <h1 className="text-2xl text-gray-600 text-center font-extrabold uppercase">
                Site Under Construction
              </h1>
              <img
                src={construction}
                alt="construction"
                className="max-w-[220px]"
              />
              <p className="text-center text-gray-600">
                Our website is under construction, but we are ready to go!
                Special surprise for our subscribers only
              </p>
              <form className="flex">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Valid Email"
                  className="p-2 rounded-sm outline-none"
                />{" "}
                <button className="bg-yellow-400 rounded-r-md font-semibold p-2">Notify</button>
              </form>

              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

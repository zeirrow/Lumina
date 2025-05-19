import {
  cloneElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opensWindowName }) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  useEffect(() => {
    if (name === openName) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [name, openName]);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] transition-all duration-300">
      <div
        ref={ref}
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-white rounded-lg shadow-xl p-8 transition-all duration-300 w-[calc(100%-2rem)] max-w-lg
          ${
            name === openName ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
      >
        <button
          onClick={close}
          className="absolute top-3 right-5 p-1 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Close modal"
        >
          <HiXMark className="w-6 h-6 text-gray-500" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

// example usage

// <Modal>
//   <Modal.Open opensWindowName="exampleModal">
//     <button className="btn">Open Modal</button>
//   </Modal.Open>
//   <Modal.Window name="exampleModal">
//     <h1 className="text-2xl">Hello, World!</h1>
//     <p>This is a modal window.</p>
//   </Modal.Window>
// </Modal>

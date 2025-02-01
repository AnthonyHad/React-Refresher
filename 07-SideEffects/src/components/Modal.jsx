import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal({ open, onClose, children }) {
  const dialog = useRef();

  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });

  // Use effect is used to sync the state of the dialog with the open prop.
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} open={open} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;

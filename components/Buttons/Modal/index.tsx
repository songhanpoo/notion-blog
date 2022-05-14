import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function Modal() {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
      setIsBrowser(true);
    }, []);

    if (isBrowser) {
        return ReactDOM.createPortal(
            <div>Hello from modal</div>,
            document.getElementById("modal-root")


}

export default Modal;
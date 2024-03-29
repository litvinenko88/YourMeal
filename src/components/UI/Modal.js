import styles from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

function Backdro(props) {
  return <div className={styles.backdro} onClick={props.onClick}></div>;
}

function ModalWindow(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

let portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdro onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;

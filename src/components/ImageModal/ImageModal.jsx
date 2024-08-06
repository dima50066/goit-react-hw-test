import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      closeTimeoutMS={300}
    >
      <button className={styles.closeButton} onClick={onRequestClose}>
        Close
      </button>
      {image && (
        <img
          src={image.urls?.regular}
          alt={image.alt_description || "Image"}
          className={styles.image}
        />
      )}
    </Modal>
  );
}

export default ImageModal;

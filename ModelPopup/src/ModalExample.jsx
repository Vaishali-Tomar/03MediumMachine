import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalExample.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const ModalExample = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }
  return (
    <div className="modal-example">
      <button className="open-modal-button" onClick={openModal}>Show Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Modal Heading</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, voluptates. Nobis delectus magni quaerat et deserunt fuga temporibus doloribus vero quidem repellat suscipit nulla tempora eveniet, repellendus deleniti placeat quibusdam.</p>
        <button className="close-modal-button" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  )
}

export default ModalExample

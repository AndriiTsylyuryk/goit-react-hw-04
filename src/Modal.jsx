import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root'); // Потрібно вказати правильний id кореневого елемента

function ModalComponent({ isOpen, onRequestClose }) {
  let subtitle;

  function afterOpenModal() {
    if (subtitle) {
      subtitle.style.color = '#f00'; // Змінює колір підпису після відкриття модального вікна
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={onRequestClose}>Close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>Tab navigation</button>
        <button>Stays</button>
        <button>Inside</button>
        <button>The modal</button>
      </form>
    </Modal>
  );
}

export default ModalComponent;
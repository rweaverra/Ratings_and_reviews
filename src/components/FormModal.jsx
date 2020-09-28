import React from 'react';
import {
  Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button,
} from 'react-bootstrap';
import FormInputs from './FormInputs.jsx';

function FormModal(props) {
  if (props.show) {
    return (
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Product Review Title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormInputs onHide={props.onHide}/>
          </Modal.Body>
          <Modal.Footer />
        </Modal.Dialog>
      </Modal>
    );
  }
  return <div></div>;
}

export default FormModal;

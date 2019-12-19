import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import IDForm from './IDForm'

const IDModal = (props) => {
    const {
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button color="danger" onClick={toggle}>S'inscrire</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>S'inscrire</ModalHeader>
          <ModalBody>
            <IDForm/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
  
  export default IDModal;
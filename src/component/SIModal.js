import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import SIForm from './SIForm'

const SIModal = (props) => {
    const {
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button color="danger" onClick={toggle}>S'identifier</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>S'identifier</ModalHeader>
          <ModalBody>
            <SIForm/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
  
  export default SIModal;
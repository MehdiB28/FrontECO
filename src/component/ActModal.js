import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import ActForm from './ActForm'

const ActModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Ajouter une activité</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ajouter une activité</ModalHeader>
        <ModalBody>
          <ActForm/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ActModal;
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ActForm from './ActForm'

const ModalForm = (props) => {
  const {
    // buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>Ajouter une activité</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ajouter une activité</ModalHeader>
        <ModalBody>
          <ActForm/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Valider</Button>{' '}
          <Button color="secondary" onClick={toggle}>Annuler</Button>
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default ModalForm;
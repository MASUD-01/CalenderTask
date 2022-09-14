import Modal from "react-modal";
import { useForm } from "react-hook-form";

import {
  ModalFooter,
  ModalBody,
  ModalHeader,
  customStyles,
  PersonButton,
} from "../styledComponent/index";

function RescheduleModal(props) {
  const { register, handleSubmit } = useForm();
  const { p1, p2, p3, p4 } = props.data;

  const onSubmit = (data) => {};

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Reschedule</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PersonButton>{p1}</PersonButton>
            <PersonButton>{p2}</PersonButton>
            <PersonButton>{p3}</PersonButton>
            <PersonButton>{p4}</PersonButton>
          </div>
        </ModalBody>
        <ModalFooter>
          {/* <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel> */}
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default RescheduleModal;

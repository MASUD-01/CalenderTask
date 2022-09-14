import Modal from "react-modal";
import { useForm } from "react-hook-form";

import {
  ModalCancel,
  ModalSubmit,
  ModalFooter,
  InputField,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles,
} from "../styledComponent/index";

function FormModal(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (
      data.p1 &&
      data.p2 &&
      data.p3 &&
      data.p4 &&
      data.Task &&
      data.Date &&
      data.Time
    ) {
      props.onModalSubmit(data);
      props.openModal();
    }
  };

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.openModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Create Appointment</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <InputContainer>
            <InputSpan>Person1:</InputSpan>
            <InputField {...register("p1")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Person2:</InputSpan>
            <InputField {...register("p2")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Person3:</InputSpan>
            <InputField {...register("p3")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Person4:</InputSpan>
            <InputField {...register("p4")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Task:</InputSpan>
            <InputField {...register("Task")}></InputField>
          </InputContainer>
          {/* <InputContainer>
            <InputSpan>Gender:</InputSpan>
            <InputField {...register("Gender")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Age:</InputSpan>
            <InputField {...register("Age")}></InputField>
          </InputContainer> */}
          <InputContainer>
            <InputSpan>Date:</InputSpan>
            <InputField
              {...register("Date")}
              type="number"
              min="1"
              max="31"
              placeholder="Type a number 1 - 31"
            ></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Time:</InputSpan>
            <InputField
              {...register("Time")}
              type="number"
              min="1"
              max="12"
              placeholder="Type a number 1 - 12"
            ></InputField>
          </InputContainer>
        </ModalBody>
        <ModalFooter>
          <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default FormModal;

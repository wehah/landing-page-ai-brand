import Modal from "./Modal.jsx";
import {useModalStore} from "../../store";
import Button from "../Common/Buttons/Buttons.jsx";

export default function ModalToggle({ ...props }) {
    const   showModal = useModalStore((state) => state.open); 
  
    const toggleModal = useModalStore((state) => state.toggleModal);
    return (
        <> 
        <Button onClick={toggleModal} variant={"secondary"} label={"open modal"}/>
        <Modal  />
        </>
    );
}
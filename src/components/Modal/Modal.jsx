import "./modal.scss";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "../Common/Typography/Typography";
import Button from "../Common/Buttons/Buttons";
import { useModalStore } from "../../store";
import Image from "./../Common/image/Image";
import ImageUrls from "../Common/image/ImageUrls";
import { ImageUrl } from "../Common/image/ImageUrl";
import Input from "../Common/Input/Input";
import { backdropVariants, modalVariants } from "./ModalAnimations";
import { useEffect } from "react";

const Modal = () => {
  const open = useModalStore((state) => state.open);
  const closeModal = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);

  const handleClick = () => {
    closeModal();
    localStorage.setItem("modal", "closed");
  };

  useEffect(() => {
    const modalTimer = setTimeout(() => {
      if (localStorage.getItem("modal") === "closed") {
        closeModal();
      } else {  
        openModal(); 
      }
    }, 10000)

    return () => {
      clearTimeout(modalTimer);
    };
  }, [closeModal]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="modal-overlay"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit={"exit"}
          >
            <motion.div className="modal-content" variants={modalVariants}>
              <div>
                <div className="modal-button">
                  <Button
                    variant={"secondary"}
                    shape={"rounded"}
                    label={"close"}
                    onClick={handleClick}
                  />
                </div>
                <Image src={ImageUrl.image23.src} blurhash={ImageUrl.image23.blurhash} />
              </div>
              <div className="modal-body">
                <Typography variant={"body1"} color={"primary-dim"}>
                  Subscribe to our newsletter
                </Typography>
                <Typography variant={"h2"} color={"primary"}>
                  let’s keep in Touch
                </Typography>
                <Typography variant={"body1"} color={"primary-dim"}>
                  Unlock the future of AI with us. Join our community of AI
                  enthusiasts and be the first to know about groundbreaking
                  innovations.
                </Typography>
                <div className="modal-subscribe-form">
                  <Input placeholder="Enter your email" type="text" />
                  <Button
                    onClick={handleClick}
                    variant={"secondary"}
                    shape={"rounded"}
                    label={"arrow_forward"}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

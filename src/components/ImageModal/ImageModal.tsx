import { IoClose } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";

import Modal from "react-modal";
import { Image } from "../App/App.types";

import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  imageModal: Image | null;
  onClose: () => void;
};

const ImageModal = ({ isOpen, imageModal, onClose }: ImageModalProps) => {
  if (!imageModal) return;

  const { alt_description,
    description,
    user,
    likes,
    links: { download },
    urls: { regular },
    user: { location, name },
   } = imageModal;

  return (
    <Modal
    isOpen={isOpen}
    overlayClassName={css.ReactModal__Overlay}
    className={css.ReactModal__Content}
    closeTimeoutMS={300}
    onRequestClose={() => onClose}
    ariaHideApp={false}
    >
    <button className={css.closeBtn} onClick={() => onClose()}>
        <IoClose className={css.closeIcon} />
      </button>
      <img src={regular} alt={alt_description} />
      <div className={css.info}>
      {description && <p>{description}</p>}
        {name && <p>Author: {name}</p>}
        {location && (
          <p className={css.infoItem}>
            <FaMapLocationDot className={css.icon} />
            {location}
          </p>
        )}
        {likes && (
          <p className={css.infoItem}>
            <AiTwotoneLike className={css.icon} />
            {likes}
          </p>
        )}
      </div>
        <a href={download} download className={css.downloadLink}>Download</a>
   
    </Modal>
  );
};


export default ImageModal;

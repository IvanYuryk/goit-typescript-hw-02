declare module 'react-modal' {
    import { Component, ReactNode } from 'react';
  
    interface ModalProps {
      isOpen: boolean;
      onRequestClose?: () => void;
      style?: {
        overlay?: object;
        content?: object;
      };
      className?: string;
      overlayClassName?: string;
      ariaHideApp?: boolean;
      closeTimeoutMS?: number;
      children?: ReactNode;
    }
  
    class Modal extends Component<ModalProps> {}
  
    export default Modal;
  }
  
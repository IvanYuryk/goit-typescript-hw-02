interface ImageCardProps {
  id: string;
  alt_description: string;
  small: string;
  openModal: (id: string) => void;
};

const ImageCard = ({
  id,
  alt_description,
  small,
  openModal,
}: ImageCardProps) => {
  return (
    <div>
      <img src={small} alt={alt_description} onClick={() => openModal(id)} />
    </div>
  );
};

export default ImageCard;

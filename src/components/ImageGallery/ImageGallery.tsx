import { forwardRef } from "react";
import { Image } from "../App/App.types";

import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";


interface ImageGalleryProps {
  images: Image[];
  openModal: (id: string) => void;
};

const ImageGallery = forwardRef<HTMLUListElement, ImageGalleryProps>(
  function ImageGallery({ images, openModal }, ref) {
  return (
    <ul className={css.gallery} ref={ref}>
      {images.map(({ id, alt_description, urls }) => (
        <li className={css.item} key={id}>
          <ImageCard
            id={id}
            alt_description={alt_description}
            small={urls.small}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
});

export default ImageGallery;

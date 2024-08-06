import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={styles.item}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;

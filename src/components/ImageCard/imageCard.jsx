import styles from "./ImageCard.module.css";

function ImageCard({ image }) {
  if (!image || !image.urls) {
    return null;
  }

  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={styles.image}
      />
    </div>
  );
}

export default ImageCard;

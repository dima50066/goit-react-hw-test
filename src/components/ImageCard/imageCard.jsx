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

      <p className={styles.description}>{image.alt_description}</p>

      <p className={styles.author}>Author: {image.user.name}</p>

      <p className={styles.likes}>Likes: {image.likes}</p>
    </div>
  );
}

export default ImageCard;

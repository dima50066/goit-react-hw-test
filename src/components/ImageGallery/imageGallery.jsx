import ImageCard from "../ImageCard/imageCard";
const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((id, avg_color, src, alt) => (
        <li key={image.id}>
          <ImageCard
            url={url}
            alt={alt}
            key={id}
            avg_color={avg_color}
            src={src}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;

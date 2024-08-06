import { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";
import { getPhotos } from "./apiServices/unSplash";
import SearchBar from "./components/SearchBar/searchBar";
import ImageGallery from "./components/ImageGallery/imageGallery";
import Loader from "./components/Loader/loader";
import ErrorMessage from "./components/ErrorMessage/errorMessage";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const onHandleSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
    setIsEmpty(false);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url, alt) => {
    setModalUrl(url);
    setModalAlt(alt);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoader(true);
      try {
        const { per_page, photos, total_results } = await getPhotos(
          query,
          page
        );
        if (!photos.length) return setIsEmpty(true);
        setImages((prevImages) => [...prevImages, ...photos]);
        setIsVisible(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          onLoadMore={onLoadMore}
          isVisible={isVisible}
          isEmpty={isEmpty}
        />
      )}
      {isVisible && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {loader && <Loader />}
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default App;

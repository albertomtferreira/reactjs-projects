import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./image_slider.styles.css";

export default function ImageSlider({ url, limit, page }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [grayscale, setGrayscale] = useState("");
  const [grayscaleStatus, setGrayscaleStatus] = useState("OFF");
  const [blur, setBlur] = useState(1);

  async function fetchImages(url) {
    try {
      setIsLoaded(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
        setIsLoaded(false);
        console.log(data);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setIsLoaded(false);
    }
    return image;
  }
  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  };
  const handleGrayscale = () => {
    if (grayscale === "grayscale") {
      setGrayscale("");
      setGrayscaleStatus("OFF");
    } else {
      setGrayscale("grayscale");
      setGrayscaleStatus("ON");
    }
  };
  const handleBlurIncrease = () => {
    if (blur < 10) {
      setBlur(blur + 1);
    }
  };
  const handleBlurDecrease = () => {
    if (blur > 1) {
      setBlur(blur - 1);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (errorMsg) return <div>Error: {errorMsg}</div>;
  if (isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <button
          onClick={handleGrayscale}
        >{`Grayscale: ${grayscaleStatus}`}</button>
      </div>
      <div>
        <button onClick={handleBlurDecrease}>-</button>
        <span>{` Blur: ${blur - 1}`}</span>
        <button onClick={handleBlurIncrease}>+</button>
      </div>

      <div className="image-slider-container" key="image-slider-container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        {image && image.length
          ? image.map((image, index) => (
              <img
                key={index}
                src={`${image.download_url}?${grayscale}&blur=${blur}`}
                alt={image.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {image && image.length
            ? image.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}

import styles from "./Carousel.module.css";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import { useEffect, useRef } from "react";

let slideIndex = 1;

const Carousel = () => {
  const slidesRef = useRef(null);

  function showSlides(n) {
    let slides = slidesRef.current.children;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "grid";
  }
  const moveSlides = (n) => {
    showSlides((slideIndex += n));
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <div className={styles["carousel"]}>
      <div className={styles["slides"]} ref={slidesRef}>
        <div className={styles["slide"]}>
          <div className={styles["slide-left"]}>
            <p>We're here to</p>
            <h2>Plan Your Home,</h2>
            <h2>Buy Materials &amp;</h2>
            <h2>Execute Designs</h2>
            <div className={styles["controls"]}>
              <div className={styles["indicator"]}>
                <p>1</p>
                <p className={styles["indicator-bar"]}>
                  <span className={styles["bar"]}></span>
                </p>
                <p>2</p>
              </div>
              <div className={styles["arrow-controls"]}>
                <img
                  className={styles["arrow"]}
                  src={leftArrow}
                  alt="left arrow"
                  onClick={() => moveSlides(-1)}
                />
                <img
                  className={styles["arrow"]}
                  src={rightArrow}
                  alt="right arrow"
                  onClick={() => moveSlides(1)}
                />
              </div>
            </div>
          </div>
          <div className={styles["slide-right"]}>
            <img src={image1} alt="1" />
          </div>
        </div>
        <div className={styles["slide"]}>
          <div className={styles["slide-left"]}>
            <p>We're happy to</p>
            <h2>Design Office,</h2>
            <h2>Buy Paints &amp;</h2>
            <h2>Execute Designs</h2>
            <div className={styles["controls"]}>
              <div className={styles["indicator"]}>
                <p>2</p>
                <p className={styles["indicator-bar"]}>
                  <span className={styles["bar-full"]}></span>
                </p>
                <p>2</p>
              </div>
              <div className={styles["arrow-controls"]}>
                <img
                  className={styles["arrow"]}
                  src={leftArrow}
                  alt="left arrow"
                  onClick={() => moveSlides(-1)}
                />
                <img
                  className={styles["arrow"]}
                  src={rightArrow}
                  alt="right arrow"
                  onClick={() => moveSlides(1)}
                />
              </div>
            </div>
          </div>
          <div className={styles["slide-right"]}>
            <img src={image2} alt="2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

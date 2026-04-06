import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Reviews.module.css";

const REVIEWS = [
  {
    id: 1,
    name: "Victoria Dobrzhanska",
    text: "I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.",
    img1x: "/img/review/review-img-1-1x.webp",
    img2x: "/img/review/review-img-1-2x.webp",
  },
  {
    id: 2,
    name: "Nazar Babenko",
    text: "This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.",
    img1x: "/img/review/review-img-2-1x.webp",
    img2x: "/img/review/review-img-2-2x.webp",
  },
  {
    id: 3,
    name: "Olena Kampusch",
    text: "Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.",
    img1x: "/img/review/review-img-3-1x.webp",
    img2x: "/img/review/review-img-3-2x.webp",
  },
];

function Reviews({ onOpenModal }) {
  return (
    <section className={styles.review} id="reviews">
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.accent}>chocolate</span> is loved
        </h2>

        <div className={styles.swiperOuter}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
          >
            {REVIEWS.map((review, index) => (
              <SwiperSlide key={review.id}>
                <div
                  className={styles.cardWrapper}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <div className={styles.avatar}>
                    <img
                      srcSet={`${review.img1x} 1x, ${review.img2x} 2x`}
                      src={review.img1x}
                      alt={review.name}
                      width="80"
                      height="80"
                    />
                  </div>

                  <div className={styles.reviewItem}>
                    <h3 className={styles.reviewSubtitle}>{review.name}</h3>
                    <p className={styles.reviewText}>{review.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className={styles.reviewBtn}
          type="button"
          onClick={onOpenModal}
        >
          Leave a review
        </button>
      </div>
    </section>
  );
}

export default Reviews;

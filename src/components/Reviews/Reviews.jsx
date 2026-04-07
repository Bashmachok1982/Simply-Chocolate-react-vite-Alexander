import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Reviews.module.css";

function Reviews({ reviews, onOpenModal }) {
  // 🔥 теперь ПРАВИЛЬНО — внутри компонента
  const [visibleCount, setVisibleCount] = useState(10);

  return (
    <section className={styles.review} id="reviews">
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.accent}>CHOCOLATE</span> IS LOVED
        </h2>

        <div className={styles.swiperOuter}>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 16 },
              1200: { slidesPerView: 3, spaceBetween: 28 },
            }}
          >
            {/* 🔥 ВАЖНО — slice */}
            {reviews.slice(0, visibleCount).map((review, index) => (
              <SwiperSlide key={review.id}>
                <div
                  className={styles.cardWrapper}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {/* АВАТАР */}
                  <div className={styles.avatar}>
                    <img
                      src={review.img}
                      alt={review.name}
                      width="80"
                      height="80"
                    />
                  </div>

                  {/* КАРТОЧКА */}
                  <div className={styles.reviewItem}>
                    <h3 className={styles.reviewSubtitle}>{review.name}</h3>

                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= review.rating
                              ? styles.starActive
                              : styles.star
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p className={styles.reviewText}>{review.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🔥 LOAD MORE */}
        {visibleCount < reviews.length && (
          <button
            className={styles.loadMoreBtn}
            onClick={() => setVisibleCount((prev) => prev + 10)}
          >
            Load more
          </button>
        )}

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

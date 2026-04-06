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

// onOpenModal — проп который придёт из App.jsx
// когда дойдём до модалки — подключим
function Reviews({ onOpenModal }) {
  return (
    <section className={styles.review} id="reviews">
      <div className="container">
        <h2 className={`${styles.reviewTitle} ${styles.sectionTitle}`}>
          <span className={styles.accent}>chocolate</span> is loved
        </h2>

        <ul className={styles.reviewList}>
          {REVIEWS.map((review) => (
            <li key={review.id} className={styles.reviewItem}>
              {/* Аватарка позиционируется абсолютно — торчит сверху карточки */}
              <img
                srcSet={`${review.img1x} 1x, ${review.img2x} 2x`}
                src={review.img1x}
                alt={review.name}
                width="80"
                height="80"
                className={styles.reviewImg}
              />
              <h3 className={styles.reviewSubtitle}>{review.name}</h3>
              <p className={styles.reviewText}>{review.text}</p>
            </li>
          ))}
        </ul>

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

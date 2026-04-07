import { useState } from "react";
import styles from "./ReviewsModal.module.css";

function ReviewModal({ isOpen, onClose, onAddReview }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      name,
      text,
      rating,
      // pravatar генерирует аватарку по имени — каждый раз разная
      img: `https://i.pravatar.cc/80?u=${name}`,
    };

    // Передаём новый отзыв наверх в App.jsx
    onAddReview(newReview);

    // Сбрасываем форму
    setName("");
    setText("");
    setRating(0);

    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>Leave a review</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            placeholder="Your review"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          {/* Звёзды рейтинга */}
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={star <= rating ? styles.starActive : styles.star}
              >
                ★
              </span>
            ))}
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={rating === 0}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewModal;

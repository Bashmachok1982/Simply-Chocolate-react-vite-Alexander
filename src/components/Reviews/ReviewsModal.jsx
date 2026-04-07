import { useState } from "react";
import styles from "./ReviewsModal.module.css";
import toast from "react-hot-toast";

function ReviewModal({ isOpen, onClose, onAddReview }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  // 🔥 ошибки
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  // 🔥 валидация
  const validate = () => {
    const newErrors = {};

    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (text.trim().length < 10) {
      newErrors.text = "Review must be at least 10 characters";
    }

    if (rating === 0) {
      newErrors.rating = "Please select rating";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill all fields correctly");
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      text,
      rating,
      img: `https://i.pravatar.cc/80?u=${name}`,
    };

    onAddReview(newReview);
    toast.success("Review added!");
    // очистка формы
    setName("");
    setText("");
    setRating(0);
    setErrors({});

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
          {/* NAME */}
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>

          {/* TEXT */}
          <div>
            <textarea
              placeholder="Your review"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setErrors((prev) => ({ ...prev, text: "" }));
              }}
            />
            {errors.text && <p className={styles.error}>{errors.text}</p>}
          </div>

          {/* STARS */}
          <div className={styles.starsWrapper}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => {
                    setRating(star);
                    setErrors((prev) => ({ ...prev, rating: "" }));
                  }}
                  className={star <= rating ? styles.starActive : styles.star}
                >
                  ★
                </span>
              ))}
            </div>

            {errors.rating && <p className={styles.error}>{errors.rating}</p>}
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={!name || !text || rating === 0}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewModal;

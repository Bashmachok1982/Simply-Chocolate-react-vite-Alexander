import { useState, useEffect } from "react";
import styles from "./Modal.module.css";

function Modal({ isOpen, onClose }) {
  // Состояние формы — объект со всеми полями
  // Один useState для всей формы — удобнее чем 4 отдельных
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    policy: false,
  });

  // Закрытие по Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Универсальный обработчик для всех полей
  // e.target.name — имя поля (name/email/phone/comment)
  // e.target.value — значение
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev, // копируем все предыдущие значения
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отзыв:", formData);
    // Потом здесь будет отправка через EmailJS
    setFormData({ name: "", email: "", phone: "", comment: "", policy: false });
    onClose();
  };

  // Закрытие по клику на backdrop
  const handleBackdropClick = (e) => {
    // e.target — элемент по которому кликнули
    // e.currentTarget — элемент на котором висит обработчик (backdrop)
    // Если кликнули именно по backdrop а не по модалке внутри — закрываем
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.isOpen : ""}`}
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
    >
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Закрити модальне вікно"
        >
          <svg width="28" height="28" fill="none" stroke="#111">
            <use href="/img/icons.svg#icon-close" />
          </svg>
        </button>

        <p className={`${styles.modalTitle} ${styles.sectionTitle}`}>
          Leave a review about{" "}
          <span className={styles.accent}>our chocolate</span>
        </p>

        <form className={styles.modalForm} onSubmit={handleSubmit}>
          {/* Name */}
          <div className={styles.modalField}>
            <label htmlFor="name" className={styles.modalInputLabel}>
              Name
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className={`${styles.modalElement} ${styles.modalInput}`}
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <svg className={styles.inputIcon} width="24" height="24">
                <use href="/img/icons.svg#icon-user" />
              </svg>
            </div>
          </div>

          {/* Email */}
          <div className={styles.modalField}>
            <label htmlFor="email" className={styles.modalInputLabel}>
              Email
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className={`${styles.modalElement} ${styles.modalInput}`}
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
              <svg className={styles.inputIcon} width="24" height="24">
                <use href="/img/icons.svg#icon-mail" />
              </svg>
            </div>
          </div>

          {/* Phone */}
          <div className={styles.modalField}>
            <label htmlFor="phone" className={styles.modalInputLabel}>
              Phone number
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                className={`${styles.modalElement} ${styles.modalInput}`}
                placeholder="Your number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <svg className={styles.inputIcon} width="24" height="24">
                <use href="/img/icons.svg#icon-phone" />
              </svg>
            </div>
          </div>

          {/* Comment */}
          <div className={styles.modalField}>
            <label htmlFor="comment" className={styles.modalInputLabel}>
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              autoComplete="off"
              className={`${styles.modalElement} ${styles.modalTextarea}`}
              placeholder="Enter text"
              value={formData.comment}
              onChange={handleChange}
            />
          </div>

          {/* Checkbox */}
          <div className={styles.modalField}>
            {/* visually-hidden — скрываем нативный чекбокс, рисуем свой */}
            <input
              type="checkbox"
              id="policy"
              name="policy"
              className="visually-hidden"
              checked={formData.policy}
              onChange={handleChange}
            />
            <label htmlFor="policy" className={styles.modalCheckLabel}>
              <span className={styles.modalCheckBox}>
                <svg className={styles.checkIcon} width="10" height="10">
                  <use href="/img/icons.svg#icon-check" />
                </svg>
              </span>
              I accept the terms and conditions of the{" "}
              <a href="/" className={styles.policyLink}>
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className={styles.modalSubmitBtn}
            disabled={!formData.policy}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

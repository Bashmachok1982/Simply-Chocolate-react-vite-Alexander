import styles from "./Hero.module.css";

function Hero({ onOpenModal }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <h1 className={styles.heroTitle}>
          Treat yourself or a loved one to our finest ingredients for a moment
          of pure delight!
        </h1>
        <div className={styles.heroButtons}>
          {/* Эта кнопка позже будет открывать модалку */}
          {/* Пока просто кнопка — добавим onClick когда дойдём до модалки */}
          <button
            className={`${styles.heroBtn} ${styles.heroBtnOrange}`}
            type="button"
            onClick={onOpenModal}
          >
            Buy now
          </button>

          <a
            className={`${styles.heroBtn} ${styles.heroBtnShadow}`}
            href="#made"
          >
            How it's made
          </a>

          <a className={styles.heroBtnScroll} href="#features">
            scroll down
            <span className={styles.scrollIcon}>
              <svg width="22" height="22">
                <use href="/img/icons.svg#icon-arrow-down" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import styles from "./Made.module.css";

const MADE_STEPS = [
  {
    id: 1,
    text: "Heat the milk in a saucepan without bringing it to a boil. Add sugar and cocoa powder.",
  },
  {
    id: 2,
    text: "At the same time, prepare a water bath. Melt the butter on it.",
  },
  {
    id: 3,
    text: '"Mix" the milk mixture and already liquid butter. Mix thoroughly with a silicone spatula so that the mass becomes uniform and silky.',
  },
  {
    id: 4,
    text: "Heat the mixture over low heat, letting it barely boil.",
  },
  {
    id: 5,
    text: "Pour the chocolate into special containers (can be replaced with ice molds). Allow to cool and harden.",
  },
];

function Made() {
  return (
    <section className={styles.made} id="made">
      <div className="container">
        <h2 className={`${styles.madeTitle} ${styles.sectionTitle}`}>
          How it&apos;s <span className={styles.accent}>made?</span>
        </h2>

        <div className={styles.madeWrapper}>
          {/* picture — адаптивные картинки для каждого брейкпоинта */}
          {/* Браузер сам выбирает нужный source сверху вниз */}
          {/* Первый подходящий media — тот и используется */}
          <picture>
            <source
              srcSet="/img/made/made-desktop-1x.webp 1x, /img/made/made-desktop-2x.webp 2x"
              media="(min-width: 1200px)"
            />
            <source
              srcSet="/img/made/made-tab-1x.webp 1x, /img/made/made-tab-2x.webp 2x"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/img/made/made-mob-1x.webp 1x, /img/made/made-mob-2x.webp 2x"
              media="(max-width: 767px)"
            />
            <img
              src="/img/made/made-desktop-1x.webp"
              alt="liquid chocolate"
              className={styles.madeImg}
            />
          </picture>

          <div className={styles.madeContent}>
            <h3 className={styles.madeSubtitle}>
              Try our chocolates today and discover the perfect balance of
              flavor
            </h3>
            <ul className={styles.madeList}>
              {MADE_STEPS.map((step) => (
                <li key={step.id} className={styles.madeItem}>
                  <p className={styles.madeText}>{step.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Made;

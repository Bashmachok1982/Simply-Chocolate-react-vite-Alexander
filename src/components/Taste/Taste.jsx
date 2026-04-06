import styles from "./Taste.module.css";

const TASTE_ITEMS = [
  {
    id: 1,
    title: "Milk Chocolate",
    tag: "chocolate",
    description:
      "Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk. It is the most consumed type of chocolate. Chocolate was originally sold and consumed as a beverage in pre-Columbian times.",
    img1x: "/img/taste/taste-img-1-1x.webp",
    img2x: "/img/taste/taste-img-1-2x.webp",
    // тёмный фон у первого элемента — оранжевый
    dark: true,
  },
  {
    id: 2,
    title: "Milk",
    tag: "milk",
    description:
      "Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals before they are able to digest solid food.",
    img1x: "/img/taste/taste-img-2-1x.webp",
    img2x: "/img/taste/taste-img-2-2x.webp",
    dark: false,
  },
  {
    id: 3,
    title: "Nuts",
    tag: "nuts",
    description:
      "Almonds, pistachios, and walnuts are some types of nuts that contain healthy nutrients. When eaten as part of a nutrient-dense diet, these 9 nuts may offer benefits such as reducing your risk of heart disease.",
    img1x: "/img/taste/taste-img-3-1x.webp",
    img2x: "/img/taste/taste-img-3-2x.webp",
    dark: true,
  },
  {
    id: 4,
    title: "Semi - Sweet Chocolate",
    tag: "sweet chocolate",
    description:
      "Semi-sweet chocolate has a cocoa solid content of 35 to 65%. One of the best ways to gain an understanding of this type of chocolate is to compare it to a different type of chocolate.",
    img1x: "/img/taste/taste-img-4-1x.webp",
    img2x: "/img/taste/taste-img-4-2x.webp",
    dark: false,
  },
];

function Taste() {
  return (
    <section className={styles.taste}>
      <div className="container">
        <h2 className={`${styles.tasteTitle} ${styles.sectionTitle}`}>
          It all adds up to one exceptional{" "}
          <span className={styles.accent}>taste</span> sensation
        </h2>
        <p className={styles.tasteDescription}>
          At Simply Chocolate, we believe that the secret to exceptional
          chocolate is in the details. From the sourcing of the finest
          ingredients to the careful crafting of each individual piece, every
          step of our process adds up to one exceptional taste sensation.
        </p>
        <ul className={styles.tasteList}>
          {TASTE_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`${styles.tasteItem} ${item.dark ? styles.tasteItemDark : ""}`}
            >
              {/* Картинка */}
              <img
                srcSet={`${item.img1x} 1x, ${item.img2x} 2x`}
                src={item.img1x}
                alt={item.title}
                width="206"
                height="160"
                className={styles.tasteImg}
              />

              {/* Название внизу карточки */}
              <h3 className={styles.tasteSubtitle}>{item.title}</h3>

              {/* Overlay — появляется при hover через CSS */}
              {/* В React hover-эффекты делаем через CSS, не через JS */}
              <div className={styles.tasteOverlay}>
                <h3 className={styles.overlayTitle}>{item.title}</h3>
                <div className={styles.overlayTags}>
                  <span className={styles.overlayTagOrange}>{item.tag}</span>
                  <span className={styles.overlayTagOutline}>the benefits</span>
                </div>
                <p className={styles.overlayText}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Taste;

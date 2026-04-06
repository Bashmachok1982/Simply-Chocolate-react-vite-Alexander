import styles from "./Benefits.module.css";

// Данные вынесены за компонент — список не меняется
const BENEFITS = [
  {
    id: 1,
    icon: "icon-chocolate-bar",
    title: "Unsurpassed taste",
    text: "Crafted with the finest quality cocoa beans and a dedication to perfection, each bite is a decadent experience that simply cannot be matched. Savor the richness and complexity of our Unsurpassed Taste and discover a new level of chocolate bliss.",
  },
  {
    id: 2,
    icon: "icon-coin",
    title: "Affordable price",
    text: "Indulge in high-quality chocolate without breaking the bank with Simply Chocolate's selection of affordable treats. Enjoy mouth-watering truffles and velvety chocolate bars without sacrificing taste or quality. Browse our selection and indulge in affordable luxury today.",
  },
  {
    id: 3,
    icon: "icon-spoon",
    title: "Own production",
    text: "We take pride in our own production process, ensuring that every step is carefully crafted to perfection. From selecting the finest ingredients to handcrafting each piece, our attention to detail is evident in every bite.",
  },
];

function Benefits() {
  return (
    <section className={styles.benefits} id="features">
      <div className="container">
        {/* visually-hidden — элемент скрыт визуально но доступен скринридерам */}
        <h2 className="visually-hidden">Features</h2>
        <ul className={styles.benefitsList}>
          {BENEFITS.map((benefit) => (
            <li key={benefit.id} className={styles.benefitsItem}>
              {/* Иконка в кружочке */}
              <div className={styles.iconWrap}>
                <svg width="32" height="32">
                  <use href={`/img/icons.svg#${benefit.icon}`} />
                </svg>
              </div>
              <h3 className={styles.benefitsTitle}>{benefit.title}</h3>
              <p className={styles.benefitsText}>{benefit.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Benefits;

import { useState } from "react";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#made", label: "How it's made?" },
  { href: "#reviews", label: "Chocolate is loved" },
];

function Footer() {
  // Контролируемый input — значение хранится в state
  // React следит за каждым символом который вводит пользователь
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    // Отменяем стандартное поведение формы (перезагрузку страницы)
    e.preventDefault();
    if (!email) return;
    console.log("Подписка:", email);
    // Потом здесь будет реальная отправка (EmailJS или API)
    setEmail(""); // очищаем поле после отправки
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Верхняя часть — слоган и контакты */}
        <div className={styles.footerInfo}>
          <p className={styles.footerText}>
            <span className={styles.accent}>Chocolate</span> a delicious cure
            for a bad day
          </p>

          <div className={styles.footerContactsWrapper}>
            <p className={styles.footerSubtitle}>Contact us</p>
            <address className={styles.footerContacts}>
              <ul className={styles.footerContactsList}>
                <li className={styles.footerContactsItem}>
                  <a
                    className={styles.footerContactsLink}
                    href="tel:+380684439426"
                  >
                    +380 (68) 443-94-26
                  </a>
                </li>
                <li className={styles.footerContactsItem}>
                  <a
                    className={styles.footerContactsLink}
                    href="mailto:simplychoc@gmail.com"
                  >
                    simplychoc@gmail.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Нижняя часть — навигация и форма */}
        <div className={styles.footerBottom}>
          <nav
            aria-label="Footer Navigation"
            className={styles.footerNavigation}
          >
            <ul className={styles.footerMenuList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className={styles.footerMenuItem}>
                  <a className={styles.footerMenuLink} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Форма подписки */}
          {/* onSubmit на form — правильно, а не onClick на кнопке */}
          {/* Так форма сработает и при нажатии Enter */}
          <form className={styles.footerForm} onSubmit={handleSubmit}>
            <label aria-label="footer email">
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.footerInput}
                // value + onChange = контролируемый input
                // React знает что в поле в каждый момент времени
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                autoComplete="email"
              />
            </label>
            <button type="submit" className={styles.footerFormBtn}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import styles from "./MobileMenu.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#made", label: "How it's made?" },
  { href: "#reviews", label: "Chocolate is loved" },
];

const SOCIAL_LINKS = [
  { href: "https://instagram.com", icon: "icon-insta", label: "Instagram" },
  { href: "https://twitter.com", icon: "icon-twit", label: "Twitter" },
];

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`${styles.mobMenu} ${isOpen ? styles.mobMenuOpen : ""}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={styles.menuCloseBtn}
        onClick={onClose}
        aria-label="Закрити меню"
      >
        <svg width="28" height="28">
          <use href="/img/icons.svg#icon-close" />
        </svg>
      </button>

      <nav className={styles.mobNavigation}>
        <ul className={styles.mobMenuList}>
          {NAV_LINKS.map((link) => (
            <li key={link.href} className={styles.mobMenuItem}>
              <a
                className={styles.mobMenuLink}
                href={link.href}
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <address className={styles.mobContacts}>
        <ul className={styles.mobContactsList}>
          {SOCIAL_LINKS.map((social) => (
            <li key={social.href} className={styles.mobContactsItem}>
              <a
                className={styles.mobContactsLink}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={styles.mobContactsIcon} width="24" height="24">
                  <use href={`/img/icons.svg#${social.icon}`} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </address>
    </div>
  );
}

export default MobileMenu;

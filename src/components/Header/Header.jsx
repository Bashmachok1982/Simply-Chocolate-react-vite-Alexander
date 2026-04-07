import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import MobileMenu from "../MobileMenu/MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#made", label: "How it's made?" },
  { href: "#reviews", label: "Chocolate is loved" },
];

const SOCIAL_LINKS = [
  { href: "https://instagram.com", icon: "icon-insta", label: "Instagram" },
  { href: "https://twitter.com", icon: "icon-twit", label: "Twitter" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <nav className={styles.headerNavigation}>
          <a className={styles.headerLogo} href="/">
            <span className={styles.headerLogoItalic}>SIMPLY</span>
            CHOCOLATE
          </a>

          <ul className={styles.headerMenuList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className={styles.headerMenuItem}>
                <a className={styles.headerMenuLink} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className={styles.headerContacts}>
          <ul className={styles.headerContactsList}>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.href} className={styles.headerContactsItem}>
                <a
                  className={styles.headerContactsLink}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className={styles.headerContactsIcon}
                    width="24"
                    height="24"
                  >
                    <use href={`/img/icons.svg#${social.icon}`} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </address>

        <button
          type="button"
          className={styles.menuOpenBtn}
          onClick={openMenu}
          aria-label="Відкрити меню"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#111111"
            strokeWidth="2.3"
          >
            <use href="/img/icons.svg#icon-menu" />
          </svg>
        </button>
      </div>

      
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}

export default Header;

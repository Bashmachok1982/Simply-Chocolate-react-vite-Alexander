import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#made", label: "How it's made?" },
  { href: "#reviews", label: "Chocolate is loved" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_SUBSCRIBE_TEMPLATE_ID,
        { email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setEmail("");

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
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
          <div>
            <form className={styles.footerForm} onSubmit={handleSubmit}>
              <label aria-label="footer email">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.footerInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>
              <button
                type="submit"
                className={styles.footerFormBtn}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Subscribe"}
              </button>
            </form>

            {status === "success" && (
              <p className={styles.statusSuccess}>
                ✅ Thank you for subscribing!
              </p>
            )}
            {status === "error" && (
              <p className={styles.statusError}>
                ❌ Something went wrong. Try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/global.css"; // глобальные стили подключаем здесь
import App from "./App";
import "modern-normalize";
// Инициализация AOS — один раз при старте приложения
AOS.init({
  duration: 800, // длительность анимации в мс
  once: true, // анимация срабатывает только один раз
  easing: "ease-out", // тип анимации
});

// находим div#root в index.html
const root = createRoot(document.getElementById("root"));

// рисуем внутри него наш App компонент
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

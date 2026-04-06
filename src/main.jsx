import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css"; // глобальные стили подключаем здесь
import App from "./App";
import "modern-normalize";

// находим div#root в index.html
const root = createRoot(document.getElementById("root"));

// рисуем внутри него наш App компонент
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

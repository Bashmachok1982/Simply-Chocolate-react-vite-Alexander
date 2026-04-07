import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/global.css";
import App from "./App";
import "modern-normalize";
AOS.init({
  duration: 800, 
  once: true, 
  easing: "ease-out",
});


const root = createRoot(document.getElementById("root"));


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

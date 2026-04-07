import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Taste from "./components/Taste/Taste";
import Made from "./components/Made/Made";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

import BuyModal from "./components/Modal/Modal";
import ReviewModal from "./components/Reviews/ReviewsModal";

function App() {
  /* 🟠 модалка покупки */
  const [isBuyOpen, setIsBuyOpen] = useState(false);

  /* 🔵 модалка отзывов */
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const openBuyModal = () => setIsBuyOpen(true);
  const closeBuyModal = () => setIsBuyOpen(false);

  const openReviewModal = () => setIsReviewOpen(true);
  const closeReviewModal = () => setIsReviewOpen(false);

  return (
    <>
      <Header />

      <main>
        <Hero onOpenModal={openBuyModal} />

        <Benefits />
        <Taste />
        <Made />

        <Reviews onOpenModal={openReviewModal} />
      </main>

      <Footer />

      {/* 🟠 модалка покупки */}
      <BuyModal isOpen={isBuyOpen} onClose={closeBuyModal} />

      {/* 🔵 модалка отзывов */}
      <ReviewModal isOpen={isReviewOpen} onClose={closeReviewModal} />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Taste from "./components/Taste/Taste";
import Made from "./components/Made/Made";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import BuyModal from "./components/Modal/Modal";
import ReviewModal from "./components/Reviews/ReviewsModal";

import initialReviews from "./data/reviews.json";

function App() {
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // 🔥 отзывы
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : initialReviews;
  });

  // 🔥 сохраняем
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // 🔥 ВАЖНО: теперь здесь
  const [visibleCount, setVisibleCount] = useState(10);

  const addReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <>
      <Header />

      <main>
        <Hero onOpenModal={() => setIsBuyOpen(true)} />
        <Benefits />
        <Taste />
        <Made />

        <Reviews
          reviews={reviews}
          onOpenModal={() => setIsReviewOpen(true)}
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
        />
      </main>

      <Footer />

      <BuyModal isOpen={isBuyOpen} onClose={() => setIsBuyOpen(false)} />

      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onAddReview={addReview}
      />

      <Toaster position="top-right" />
    </>
  );
}

export default App;

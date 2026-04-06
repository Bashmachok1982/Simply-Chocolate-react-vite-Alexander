import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Taste from "./components/Taste/Taste";
import Made from "./components/Made/Made";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <main>
        <Hero onOpenModal={openModal} />
        <Benefits />
        <Taste />
        <Made />
        <Reviews onOpenModal={openModal} />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;

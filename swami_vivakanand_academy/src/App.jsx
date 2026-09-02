import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./page/Home";
import AboutPage from "./page/About";
import ScrollToTop from "./components/common/ScrollToTop";
import Academics from "./page/Academics";
import Admissions from "./page/Admissions";
import Gallery from "./page/Gallery";
import Contact from "./page/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

    

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
}


import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
//import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="works"><Works /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      {/* <Footer /> */}
    </div>
  );
}


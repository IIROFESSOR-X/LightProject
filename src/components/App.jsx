import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Pricing from "./Pricing/Pricing";
import "./App.css";

const Home = () => (
  <section className="home">
    <h1>Профессиональные электрики</h1>
    <p>Надёжность, безопасность, качество</p>
    <Link to="/pricing" className="btn">Посмотреть цены</Link>
  </section>
);

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Главная</Link>
    <Link to="/pricing">Прайс</Link>
    <Link to="/contact">Контакты</Link>
  </nav>
);

const Contact = () => (
  <section className="contact">
    <h2>Контакты</h2>
    <p>Телефон: +380 99 123 45 67</p>
    <p>WhatsApp / Telegram: @elektrik_service</p>
  </section>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
  
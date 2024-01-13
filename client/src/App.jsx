import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import FreebiesPage from "./pages/FreebiesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <NavbarComponent/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/catalog" element={<CatalogPage/>} />
          <Route path="/freebies" element={<FreebiesPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      <FooterComponent/>
    </div>
  )
}

export default App
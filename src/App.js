import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/layouts/Header"
import Nav from "./components/layouts/Nav"
import Footer from "./components/layouts/Footer"

import IndexPage from "./pages/IndexPage";
import HomePage from "./pages/HomePage";
import ProductosPage from "./pages/ProductosPage";
import GaleriaPage from "./pages/GaleriaPage";
import ContactoPage from "./pages/ContactoPage";
import RegistroPage from "./pages/RegistroPage";


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="productos" element={<ProductosPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="registro" element={<RegistroPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;

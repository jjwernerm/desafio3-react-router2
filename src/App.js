import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import Pokemones from "./Views/Pokemones"
import Pokemon from "./Views/Pokemon"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemon/:pokemon" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
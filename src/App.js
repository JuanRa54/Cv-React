import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//importamos los comp creados
import About from "./components/acercade";
import Contact from "./components/contact";
import Home from "./components/home";
import Hobbies from "./components/Hobbies";
import NavBarExample from "./layouts/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route index element={<Home />} />
            <Route path="acercade" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Hobbies" element={<Hobbies />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./PageWrapper";
import Home from "./Home";
import Game from "./Game/Game";
import Character from "./Character/Character";
import Weapon from "./Weapon/Weapon";

function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path="/games" element={<Game />} />
        <Route path="/Character" element={<Character />} />
        <Route path="/Weapon" element={<Weapon />} />
        {/* <Route path="/Bonus" element={<Bonus />} />  */}
      </Route>
    </Routes>
  );
}

export default App;

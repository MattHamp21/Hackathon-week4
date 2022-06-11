import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Characters from "./Character/Character";
import CharacterForm from "./Character/CharacterForm";
import CharacterWrapper from "./Character/CharacterWrapper";
import CharacterShow from "./Character/CharacterShow";
import Game from "./Game/Game";
import Character from "./Character/Character";
import Weapon from "./Weapon/Weapon";
import PageWrapper from "./Pagewrapper";

function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index element={<Home />} />
        {/* /* <Route path="/Game" element={<Game />} /> */}
        <Route path="/characters" element={<CharacterWrapper />}>
          <Route index element={<Characters />} />
          <Route path="/characters/new" element={<CharacterForm />} />
          <Route path="/characters/edit/:id" element={<CharacterForm />} />
          <Route path="/characters/:id" element={<CharacterShow />} />
        </Route>
        {/* <Route path="/Weapon" element={<Weapon />} /> */}
        {/* <Route path="/Bonus" element={<Bonus />} /> */}
        <Route path="/games" element={<Game />} />
        <Route path="/Character" element={<Character />} />
        <Route path="/Weapon" element={<Weapon />} />
        {/* <Route path="/Bonus" element={<Bonus />} />  */}
      </Route>
    </Routes>
  );
}

export default App;

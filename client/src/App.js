import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./Pagewrapper";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index element={<Home />} />
        {/* <Route path="/Game" element={<Game />} />
        <Route path="/Character" element={<Character />} />
        <Route path="/Weapon" element={<Weapon />} />
        <Route path="/Bonus" element={<Bonus />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

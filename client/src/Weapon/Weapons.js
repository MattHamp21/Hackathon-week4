import WeaponCard from "./WeaponCard";
import { useContext } from "react";
import { WeaponContext } from "../providers/WeaponProvider";
import NewWeapon from "./WeaponForm";

export default function Weapons() {
  const data = useContext(WeaponContext);
  const renderWeapons = () => {
    return data.weapons.map((c) => {
      return <WeaponCard key={c.id} {...c} />;
    });
  };
  return (
    <div>
      <NewWeapon />
      <div>
        <h1>Video Game Weapons</h1>
        <div>{renderWeapons()}</div>
      </div>
    </div>
  );
}

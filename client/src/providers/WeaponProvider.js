import React, {useState} from "react";

export const WeaponContext = React .createContext();

const initialWeapons = (
    axios.get("/api/weapons").data
)

const WeaponProvider = (props)=>{
    const [weapons, setWeapons] = useState(initialWeapons)

    const updateInfo = (newInfo) => {
        let newWeapons = weapons.map((current) => (current.id == newInfo.id ? newInfo : current))
    }
};

export default WeaponProvider
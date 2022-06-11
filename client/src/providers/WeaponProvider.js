import axios from "axios";
import React, {useEffect, useState} from "react";

export const WeaponContext = React.createContext();


const WeaponProvider = (props)=>{
    const [weapons, setWeapons] = useState([])

    const initialWeapons = async () => {
        try {
            let res = await axios.get("/api/weapons");
            setWeapons(res.data)
        } catch (err) {
            alert(err)
        }
    }
    
    useEffect(() => {
       initialWeapons();
    },[]);

    const weaponIndex = (id)=>{weapons.findIndex(c => c.id === id)}

    const updateInfo = (newInfo) => {
        let newWeapons = weapons.map((current) => (current.id == newInfo.id ? newInfo : current))
        setWeapons(newWeapons)
        let name = newInfo.name
        let weapon_type = newInfo.weapon_type
        let game = newInfo.game
        axios.put(`/api/weapons/${newInfo.id}`, {name, weapon_type, game})
    };
    const addWeapon = (newWeapon) => {
        setWeapons([...weapons, newWeapon])
        let name = newWeapon.name
        let weapon_type = newWeapon.weapon_type
        let game = newWeapon.game
        axios.post("/api/weapons", {name, weapon_type, game})
    };
    const deleteWeapon = (id) => {
        let filteredWeapons = [...weapons].filter((current) => {
            return current.id !== id
        })
        setWeapons(filteredWeapons)
        axios.delete(`/api/weapons/${id}`)
    }

    return (
        <WeaponContext.Provider value={{weapons, updateInfo, addWeapon, deleteWeapon, weaponIndex}}>
            {props.children}
        </WeaponContext.Provider>
    )
};

export default WeaponProvider
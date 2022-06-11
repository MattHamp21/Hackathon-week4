import {useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { WeaponContext } from "../providers/WeaponProvider"

export default function UpdateWeapon(){
    let Navigate = useNavigate();
    let params = useParams();
    const data = useContext(WeaponContext)

    let target = data.weapons.filter(c => c.id == params.id)
    let [name, setName] = useState(target[0].name)
    let [weapon_type, setWeapon_type] = useState(target[0].weapon_type)
    let [game, setGame] = useState(target[0].game)

    const handleSubmit = (e) => {
        e.preventDefault();
        let newInfo = {id: params.id, name:name, weapon_type:weapon_type, game:game};
        data.updateInfo(newInfo)
        Navigate("/Weapons")
    };

    return(
        <div>
            <h1>Update Weapon Info</h1>
            <form onSubmit={handleSubmit}>
                <p>Weapon Name</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>What kind of weapon is it?</p>
                <input value={weapon_type} onChange={(e) => setWeapon_type(e.target.value)} />
                <p>What game is it from?</p>
                <input value={game} onChange={(e) => setGame(e.target.value)} /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
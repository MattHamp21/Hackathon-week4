import {useContext, useState } from "react"
import { WeaponContext } from "../providers/WeaponProvider"

export default function NewWeapon(){
    const data = useContext(WeaponContext)

    let [name, setName] = useState('')
    let [weapon_type, setWeapon_type] = useState('')
    let [game, setGame] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        let newInfo = { key:Math.random(), name, weapon_type, game};
        data.addWeapon(newInfo)
        setName('')
        setWeapon_type('')
        setGame('')
    };

    return(
        <div>
            <h1>Add your favorite Video Game Weapon!</h1>
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
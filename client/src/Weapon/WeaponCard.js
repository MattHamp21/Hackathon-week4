import { WeaponContext } from "../providers/WeaponProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const WeaponCard = ({id, name, weapon_type, game}) => {
    const data = useContext(WeaponContext)
    let navigate = useNavigate();
    const routeChange = (id) => {
        let path = `/weapons/${id}/update`
        navigate(path)
    }
    return(
        <div>
            <h2>{name}</h2>
            <p>{name} is a {weapon_type} from {game}</p>
            <button onClick={() => {data.deleteWeapon(id)}}>Delete</button>
            <button onClick={() => {routeChange(id)}}>Update</button>
        </div>
    )
}

export default WeaponCard
import { useState } from "react"
import UpdateGame from "./UpdateGame"

export default function GameCard(props) {
    const [show, setShow] = useState(true)
    return ( show ? (
        <div>
            <h2>{props.name}</h2>
            <p>Year released: {props.year}</p>
            <p>Genre: {props.genre}</p>
            <button onClick={()=>{props.remove(props.id)}}>Delete</button>
            <button onClick={()=>{setShow(false)}}>Update</button>
        </div>
    ) : <UpdateGame 
            id={props.id}
            name={props.name}
            year={props.year}
            genre={props.genre}
            setShow={setShow}
            updateGames={props.updateGames}
        />
    )
}
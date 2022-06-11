import { useState } from "react";
import axios from "axios"

export default function UpdateGame(props){
    const [name, setName] = useState(props.name)
    const [year, setYear] = useState(props.year)
    const [genre, setGenre] = useState(props.genre)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            let res = await axios.put(`/api/games/${props.id}`,{name, year, genre})
            props.updateGames(res.data)
        } catch(error){
            alert(error)
        } props.setShow(true)
    };

    return (
        <div>
            <h2>Update</h2>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>Year</p>
                <input type='number' value={year} onChange={(e)=>setYear(e.target.value)}/>
                <p>Genre</p>
                <input value={genre} onChange={(e)=>setGenre(e.target.value)}/>

                <button>Submit Changes</button>
            </form>
        </div>
    )
};
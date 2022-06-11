import { useState } from "react";
import axios from "axios"

export default function GameForm(props){
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [genre, setGenre] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            let res = await axios.post(`/api/games`,{name, year, genre})
            props.addGame(res.data)
        } catch(error){
            alert(error)
        }
        setName('')
        setYear('')
        setGenre('')
    };

    return (
        <div>
            <h2>Add your favorite game!</h2>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>Year</p>
                <input type='number' value={year} onChange={(e)=>setYear(e.target.value)}/>
                <p>Genre</p>
                <input value={genre} onChange={(e)=>setGenre(e.target.value)}/>

                <button>Submit</button>
            </form>
        </div>
    )
};
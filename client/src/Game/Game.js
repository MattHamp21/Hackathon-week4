import { useEffect, useState } from "react";
import axios from "axios";
import GameForm from "./GameForm";
import GameCard from "./GameCard";

export default function Game() {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        getGames();
    },[]);

    const getGames = async () => {
        try {
            let res = await axios.get("/api/games");
            setGames(res.data)
            setLoading(false)
        } catch (err) {
            alert(err)
            setError(err)
            setLoading(false)
        }
    }

    const addGame = (game) => {
        setGames([...games, game])
    }
    const updateGames = (updatedGame) => {
        let editedGames = [...games].map((current) =>{
            if(current.id !== updatedGame.id){
                return current
            } else {
                return updatedGame
            }
        })
        setGames(editedGames)
    }

    const remove = (id) => {
        setGames(games.filter((current) => {
            return current.id !== id
        }))
        axios.delete(`/api/games/${id}`)

    }

    const renderGames = () => {
        return (
        games.map((current) => {
            return(
                <GameCard 
                    key = {current.id}
                    id = {current.id}
                    name = {current.name}
                    year = {current.year}
                    genre = {current.genre}
                    updateGames ={updateGames}
                    remove={remove}
                />
            )
        })
    )}

    return (
        <div>
            <GameForm
                addGame ={addGame} 
            />
            {renderGames()}
        </div>
    )
}

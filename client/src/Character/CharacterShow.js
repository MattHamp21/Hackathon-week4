import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Characters from "./Character";

export default function CharacterShow() {
  const params = useParams();
  const navigate = useNavigate;
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      let res = await axios.get(`/api/characters/${params.id}`);
      console.log("res", res);
      setCharacters(res.data);
    } catch (err) {
      alert("error occured");
      setError(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Show Character</h1>
      <p> showing Character with id {params.id}</p>
      <p> Name: {characters.name}</p>
      <p>Age: {characters.age}</p>
      <p>Game: {characters.game}</p>
      <hr></hr>
      <Link to="/Character">Go back to character</Link>
    </div>
  );
}

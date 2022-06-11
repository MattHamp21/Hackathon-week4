import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function CharacterShow() {
  const params = useParams();
  const navigate = useNavigate;
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCharacters = async () => {
    try {
      let res = await axios.get("/api/characters");
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
      <p> Name {params.name}</p>
      <Link to="/Character">Go back to character</Link>
    </div>
  );
}

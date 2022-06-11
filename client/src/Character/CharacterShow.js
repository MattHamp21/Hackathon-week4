import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Characters from "./Character";

export default function CharacterShow() {
  const params = useParams();
  const navigate = useNavigate;
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters();
  }, []);

  const deleteCharacter = (id) => {
    let newCharacter = characters.filter((c) => c.id !== id);
    setCharacters(newCharacter);
  };

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

  const renderUser = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
    return characters.map((c) => {
      return (
        <div key={c.id}>
          <h1>Name: {c.name}</h1>
          <button onClick={() => deleteCharacter(c.id)}>delete</button>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Show Character</h1>
      <p> showing Character with id {params.id}</p>
      <p> Name: {params.name}</p>
      <div>{renderUser()}</div>
      <Link to="/Character">Go back to character</Link>
    </div>
  );
}

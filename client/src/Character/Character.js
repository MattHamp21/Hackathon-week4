import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function Characters(c) {
  const params = useParams();
  const navigate = useNavigate;
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteCharacter = (id) => {
    let newCharacters = characters.filter((c) => c.id !== id);
    setCharacters(newCharacters);
    axios.delete(`/api/characters/${id}`);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      let res = await axios.get(`/api/characters`);
      console.log("res", res);
      setCharacters(res.data);
    } catch (err) {
      alert("error occured");
      setError(err);
      setLoading(false);
    }
  };
  const renderCharacters = () => {
    return characters.map((current) => {
      return (
        <CharacterCard
          key={current.id}
          id={current.id}
          name={current.name}
          year={current.age}
          game={current.game}
          deleteCharacter={deleteCharacter}
        />
      );
    });
  };
  return (
    <div>
      {renderCharacters()}
      {/* <hr />
      <p>name {characters.name}</p>
      <Link to="/characters/edit/1">Update Character</Link>
      <Link to="/characters/1">show Character {characters.id}</Link>
      <button onClick={() => deleteCharacter(characters.id)}>delete</button>
      <hr />
      <p>Character2</p>
      <Link to="/characters/edit/2">Update character 2</Link>
      <Link to="/characters/2">Show character 2</Link>
      <button onClick={() => deleteCharacter(c.id)}>delete</button>
      <hr />
      <p>Character3</p>
      <Link to="/characters/edit/3">Update character 3</Link>
      <Link to="/characters/3">Show character 3</Link>
      <button onClick={() => deleteCharacter(c.id)}>delete</button>
      <hr />
      <p>Character4</p>
      <Link to="/characters/edit/4">Update character 4</Link>
      <Link to="/characters/4">Show character 4</Link>
      <button onClick={() => deleteCharacter(c.id)}>delete</button>
      <hr />
      <p>Character5</p>
      <Link to="/characters/edit/5">Update character 5</Link>
      <Link to="/characters/5">Show character 5</Link>
      <button onClick={() => deleteCharacter(c.id)}>delete</button>
      <hr /> */}
    </div>
  );
}

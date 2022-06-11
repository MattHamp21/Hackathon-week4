import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UpdateCharacterForm from "./UpdateCharacter";

export default function Characters() {
  const [Characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters();
  }, []);

  const addCharcter = (Character) => {
    setCharacters([Character, ...Characters]);
  };

  const deleteCharacter = (id) => {
    let newCharacters = Characters.filter((c) => c.id !== id);
    setCharacters(newCharacters);
  };

  const updateCharacter = (Character) => {
    let updateCharacter = Characters.map((c) =>
      c.id === Character.id ? Character : c
    );
    setCharacters(updateCharacter);
  };

  const getCharacters = async () => {
    try {
      let res = await axios.get("/api/characters");
      setCharacters(res.data);
      setLoading(false);
    } catch (err) {
      console.log("error");
      setError(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>List all Characters</h1>
      <p>Crud</p>
      <hr />
      <p>Character info</p>
      <Link to="/character/edit/1">Update Character</Link>
      <Link to="/character/1">show Character</Link>
      <Link to="/character/delete/1">Delete</Link>
      <hr />
      <p>Character2</p>
      <Link to="/character/edit/2">Update character 2</Link>
      <Link to="/character/2">Show character 2</Link>
      <Link to="/character/delete/2">Delete</Link>
      <hr />
    </div>
  );
}

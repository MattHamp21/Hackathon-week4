import { Link } from "react-router-dom";
import { useState } from "react";

export default function Characters(c) {
  const [Characters, setCharacters] = useState(null);
  const deleteCharacter = (id) => {
    let newCharacters = Characters.filter((c) => c.id !== id);
    setCharacters(newCharacters);
  };

  return (
    <div>
      <h1>List all Characters</h1>
      <p>Crud</p>
      <hr />
      <p>Character info</p>
      <Link to="/characters/edit/1">Update Character</Link>
      <Link to="/characters/1">show Character</Link>
      <button onClick={() => deleteCharacter(c.id)}>delete</button>
      <hr />
      <p>Character2</p>
      <Link to="/characters/edit/2">Update character 2</Link>
      <Link to="/characters/2">Show character 2</Link>
      <button onClick={() => deleteCharacter(c.id)}>delete</button>

      <hr />
    </div>
  );
}

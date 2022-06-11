import { useState } from "react";
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <Link to={`/characters/edit/${props.id}`}>Update Character</Link>
      <Link to={`/characters/${props.id}`}>Show more info </Link>
      <button onClick={() => props.deleteCharacter(props.id)}>delete</button>
    </div>
  );
}

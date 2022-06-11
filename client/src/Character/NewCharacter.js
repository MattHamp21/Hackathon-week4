import { useState } from "react";
import axios from "axios";

const NewCharacter = (props) => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(0);
  const [game, setGame] = useState(props.game);

  const handleSubmit = async (c) => {
    c.preventDefault();
    console.log({ name, age, game });
    try {
      let res = await axios.post("/api/characters", { name, age, game });
      console.log(res.data);
      props.addCharacter(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Add your favorite video game Character</h1>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input value={name} onChange={(c) => setName(c.target.value)} />
        <p>age</p>
        <input
          type="number"
          value={age}
          onChange={(c) => setAge(c.target.value)}
        />
        <p>Game</p>
        <input value={game} onChange={(c) => setGame(c.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewCharacter;

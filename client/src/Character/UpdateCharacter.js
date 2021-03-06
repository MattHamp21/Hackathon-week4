import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

// we use axios in order to make request to

const UpdateCharacterForm = (props) => {

  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [game, setGame] = useState(props.game);
  const params = useParams();
  const handleSubmit = async (c) => {
    c.preventDefault();
    try {
      let res = await axios.put(`/api/characters/${params.id}`, {
        name,
        age,
        game,
      });
      console.log(res);
      props.updateCharacter(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(props);
  return (
    <div>
      <div>
        <h1>Form</h1>
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
          <button>Save Changes</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateCharacterForm;

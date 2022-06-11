import { useState } from "react";
import axios from "axios";

const NewCharacter = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [game, setGame] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`/api/characters`, { name, age, game });
      props.addCharacter(res.data);
    } catch (error) {
      alert(error);
    }
    setName("");
    setAge("");
    setGame("");
  };

  return (
    <div>
      <h1>Add your favorite video game Character</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Age</p>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>Game</p>
        <input value={game} onChange={(e) => setGame(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewCharacter;

//     return (
//         <div>
//             <h2>Add your favorite game!</h2>
//             <form onSubmit={handleSubmit}>
//                 <p>Name</p>
//                 <input value={name} onChange={(e)=>setName(e.target.value)}/>
//                 <p>Year</p>
//                 <input type='number' value={year} onChange={(e)=>setYear(e.target.value)}/>
//                 <p>Genre</p>
//                 <input value={genre} onChange={(e)=>setGenre(e.target.value)}/>

//                 <button>Submit Changes</button>
//             </form>
//         </div>
//     )
// };

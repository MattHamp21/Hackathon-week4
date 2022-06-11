import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CharacterForm() {
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/Character");

    return (
      <div>
        <h1>Character Form</h1>
        {params.id ? "Edit" : "New"}
        <hr />
        {params.id ? `id is ${params.id}` : "no id"}
        <hr />
        <Link to="/Character">Go back to character</Link>
        <button onClick={handleSubmit}> {params.id ? "Edit" : "New"} </button>
      </div>
    );
  };
}

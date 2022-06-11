export default function NewCharacter() {
  const [Characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters();
  }, []);

  const addCharcter = (Character) => {
    setCharacters([Character, ...Characters]);
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
}

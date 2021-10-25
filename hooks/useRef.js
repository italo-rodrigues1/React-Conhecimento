const App = () => {
    const [name, setName] = useState('...');
    const inputRef = useRef(null);
    const prevNameRef = useRef('');
  
    useEffect(() => {
      prevNameRef.current = name;
    }, [name]);
  
    const handleChange = (e) => {
      setName(e.target.value);
    }
  
    return (
      <>
        <h1>My name is {name} and was {prevNameRef.current}</h1>
        <input
          ref={inputRef}
          value={name}
          onChange={handleChange}
        />
        <button
          onClick={() => inputRef.current.focus()}
        >
          Focus
        </button>
      </>
    );
  }
import {useState} from 'react';

export default function App(){
    const [count, setCount] = useState(0);
    const [count, setCount] = useState('');
    const [count, setCount] = useState({
        name: 'italo',
        age: '19'
    });
    const [count, setCount] = useState(() => {});
    const [count, setCount] = useState([]);

    return (
        <>
            <h1>Contador de Numbers:</h1>
            <p> Você clicou no botão : {count}</p>
            <button onClick={number=>setCount(number + 1)}>Add+</button>
        </>
    )

}
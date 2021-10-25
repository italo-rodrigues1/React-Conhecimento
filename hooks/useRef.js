import {useState,useEffect} from 'react';

export default function App(){
    const [count, setCount] = useState(0);
    // só executa 
    useEffect(() => {

    })
    // só executa uma vez
    useEffect(() => {
        
    },[])
    // só executa se o count mudar
    useEffect(() => {
        
    },[count])

    return (
        <>
            <h1>Contador de Numbers:</h1>
            <p> Você clicou no botão : {count}</p>
            <button onClick={number=>setCount(number + 1)}>Add+</button>
        </>
    )

}
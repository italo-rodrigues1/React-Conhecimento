// SITE PARA ILUSTRAR O USO DA RENDERIZAÇÃO CONDICIONAL
//https://medium.com/reactbrasil/renderiza%C3%A7%C3%A3o-condicional-em-react-bb8c16dddd6f 

// O && RETORNA VERDADEIRO SOMENTE SE AS VARIÁVEIS INFORMADOS FOREM AS DUAS VERDADEIRAS
// O || ELE PASSA PELA EXPRESSA ATÉ UMA SER VERDADEIRA ,E FALSO CASO OS DOIS ELEMENTOS SEJAM FALSOS




//PARA EXPRESSÕES COM MAIS DE DOIS ITENS, É INTERESSANBTE CRIAR UMA VARIÁVEL PARA ABSTRAIR OS ITNS DA VALIDAÇÃO. UM EXEMPLO:    

{!isLoading && !results.length && (
    <span>NENHUM RESULTADO ENCONTRADO</span>
)}
// VS
const shouldDisplayNotFound = !isLoading && !results.length;
{shouldDisplayNotFound && (
    <span>NENHUM RESULTADO ENCONTRADO</span>
)}


/******************************************************************/ 

import {useState} from 'react';

export default function App(){
    const [count, setCount] = useState(0);
  

    return (
        <>
            <h1>Contador de Numbers:</h1>
            <p> Você clicou no botão : {count}</p>
            <button onClick={number=>setCount(number + 1)}>Add+</button>
            <button onClick={number=>setCount(number - 1)}>Sub-</button>

            {count === 0 && <p>Zero</p>}
            {count === 1 && <p>One</p>}

            {count > 2 ? <p>Dois</p> : <p>é menor que dois</p>}

        </>
    )

}

/******************************************************************/ 

export default function App(){
    const [count, setCount] = useState(0);
  
    const countV = count === 0  && count === 1;
    const countV2 = count === 2 || count === 3;
    return (
        <>
            <h1>Contador de Numbers:</h1>
            <p> Você clicou no botão : {count}</p>
            <button onClick={number=>setCount(number + 1)}>Add+</button>
            <button onClick={number=>setCount(number - 1)}>Sub-</button>

            {countV && <p>Zero</p>}
            {countV && <p>One</p>}
            {countV2 && <p>Dois</p>}
            {countV2 && <p>Três</p>}

            {count > 5 ? <p>Cinco</p> : <p>é maior que quatro</p>}

        </>
    )

}

/******************************************************************/ 


// Handlers também são utilizados em casos específicos. Quando você precisa renderizar diferentes conteúdos para um mesmo bloco, todos eles baseados em um dado valor.

const handlers = {
  number: value => <NumberDisplay>{value}</NumberDisplay>,
  currency: value => <CurrencyDisplay customProps value={value} />,
  time: value => <TimeDisplay time={value} customProps />,
  date: value => <DateDisplay date={value}  showTime={false} />,
  default: value => value,
};

const displayData = (type, value) => {
  const handler = handlers[type] || handlers.default;
  return handler(value);
};

const DataDisplay = ({ type, value }) => (
  <div>
    {displayData(type, value)}
  </div>
);


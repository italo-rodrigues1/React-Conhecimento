import React from 'react';
import {api} from './services';

function Api() {
    const [data, setData] = useState();
    
    api.get('/api/')
    .then(response => {(setData(response.data))})
    .cath(error => {(console.log(error))})

    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </>
    )
}

export default Api;

//https://backefront.com.br/como-fazer-upload-arquivo-react/

import { useRef } from 'react';

function App() {
  const filesElement = useRef(null);

  const sendFile = async () => {
    const dataForm = new FormData();

    for (const file of filesElement.current.files) {
      dataForm.append('file', file);
    }

        
    api.post('/upload',{dataForm: dataForm})
    .then(response => {console.log("Sucesso no upload")})
    .cath(error => {(console.log(error))})

    const data = await res.json();
    console.log(data);
    
  };

  return (
    <div>
      <input type="file" multiple ref={filesElement} />
      <button onClick={sendFile}>Send file</button>
    </div>
  );
}

export default App;
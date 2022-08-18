import React, {useState} from 'react';
import {marked} from 'marked';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

marked.setOptions({
  breaks: true
});

function App() {
  const [text,setText] = useState(`
# Bem-vindo ao meu Visualisador de Markdown!

## Este é um subtítulo.

Aqui está um código, \`<div></div>\`, entre duas crases.

E também um código de várias linhas:
\`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
\`\`\`

Você também pode deixar o texto **negrito**... uau!

Também há [links](https://github.com/NathalyCavalcante)

E claro que existem listas.
- Item 1.
- Item 2.
- Item 3.

> Citação em Bloco!

E imagem fofa! 
![alt text](https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35054.jpg?w=740&t=st=1660853225~exp=1660853825~hmac=e790032a62fbd81d4a31b94ecd11cc77b46e733dd337824eb7f897f636b08e90)

`);
  
  return (
    <div className="App">
      <h1 className="display-4 text-secondary">Editor</h1>
      <textarea 
      id="editor"
      rows="20" 
      className= "col-6 textarea shadow p-3 mb-5 bg-light rounded w-50 p-3 mx-auto font-monospace border border-0"  
      value={text}
      onChange={(e) => setText(e.target.value)}
      ></textarea>
      <h2 className="display-4 text-secondary">Visualisador</h2>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({markdown}) {
  return (
      <div className="shadow p-3 mb-5 bg-light rounded w-50 p-3 mx-auto" 
      dangerouslySetInnerHTML={{__html: marked(markdown)}} id="preview"></div>
  );
  }



export default App;

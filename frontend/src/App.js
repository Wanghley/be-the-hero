import React from 'react';
import Routes from './routes'
import './global.css'

export default function App(){
    return(
        <Routes/>
    );
}

/**
 * APLICAÇÂO DE CONCEITOS REACT
 */
/*
import React,{useState} from 'react';
import Header from './Header'
//JSX file inside a JS code - JavaScript-XML
function App(){
    const [count,setCount] = useState(0); //Estado atualizado para atualizar a informação, relfetindo as alterações dentro da interface
    //array com duas posições   [valor,funcaoAtualizacao]
    function increment(){
        setCount(count+1);
    }
    return(
        <div>
            <Header> Contador: {count}</Header>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
}

export default App;

*/
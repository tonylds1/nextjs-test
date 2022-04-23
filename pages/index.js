import { useState } from 'react';

export default function Home() {
    return (
        <div>
            <div>Hello World Next! </div>
            <div>
                <h1>Home</h1>
                <Contador />
            </div>
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador+1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar Contador</button>
        </div>
    )
}
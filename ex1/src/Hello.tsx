import React, { useContext, useState } from 'react';
import { Context } from './Context';

interface Props {
    nome: string
}

export default (props: Props) => {

    const [count, setCount] = useState(0)
    const context = useContext(Context)

    const onClick = (event: React.MouseEvent<HTMLInputElement>) => {
        setCount(count + 1)
        context.setTeste('context ' + count)
    }

    return (
        <>
            <h1>{props.nome} - {count} : {context.teste}</h1>
            <input type="button" value="Click" onClick={onClick} />
        </>
    )
}
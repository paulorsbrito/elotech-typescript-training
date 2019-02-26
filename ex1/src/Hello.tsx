import React from 'react'
import { ContextProps, withContext, Consumer } from './Context';

interface Props {
    nome: string
}

type State = {
    count: number
}

export default class Home extends React.Component<Props, State> {

    state: State = {
        count: 0
    }

    onClick = (event:React.MouseEvent<HTMLInputElement>) =>    
        this.setState(state => ({count: state.count + 1}))


    render() {
        // Eu queria usar o withContext e receber o context no props, 
        // e não precisar usar o Consumer e essa função feia ai...
        return (<>
            
            <Consumer>
                {(context) => <>
                    <h1>{this.props.nome} - {this.state.count} : {context.teste}</h1>

                    <input type="button" value="Click" onClick={() => context.updateTeste('123')}/>
                </>}
            </Consumer>
        </>)
    }
}


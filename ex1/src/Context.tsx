import React from 'react'

export type ContextProps = {
    teste: string,
    updateTeste(val: string): void
}

export const { Provider, Consumer } = React.createContext<ContextProps>({
    teste: "abc",
    updateTeste: (val: string) => undefined
})

export function withContext<P extends ContextProps>(Component: React.ComponentType<P>) {
    return function ContextedComponent(props: Pick<P, Exclude<keyof P, keyof ContextProps>>) {
        return (
            <Consumer>
                {(context) => context && <Component {...props as P} context={context}/>}
            </Consumer>
        )
    }
}
import React from 'react'

export type ContextProps = {
    teste: string,
    teste2: string,
    setTeste(val: string): void
}

export const Context = React.createContext<ContextProps>({
    teste: "abc",
    teste2: "def",
    setTeste: (val: string) => undefined
})
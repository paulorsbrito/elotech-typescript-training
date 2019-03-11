import React from 'react'

export type ContextProps = {
    teste: string,
    setTeste(val: string): void
}

export const Context = React.createContext<ContextProps>({
    teste: "abc",
    setTeste: (val: string) => undefined
})
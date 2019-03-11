import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MenuList from './components/MenuList';
import { Context } from './Context';
import Home from './Hello';
import { Routes } from './Routes';

export default (props: any) => {

  const [teste, setTeste] = useState('abc')
  const [teste2, setTeste2] = useState('def')

  useEffect(() => {
    setTeste2(teste + '!')
  })

  return (
    <Context.Provider value={{ teste, teste2, setTeste }}>
      <div>
        <Home nome="Paulo Brito" />

        <BrowserRouter>
          <>
            <MenuList />
            <Routes />
          </>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

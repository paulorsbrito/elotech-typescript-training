import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MenuList from './components/MenuList';
import { Context } from './Context';
import Home from './Hello';
import { Routes } from './Routes';

export default (props: any) => {

  const [teste, setTeste] = useState('abc')

  return (
    <Context.Provider value={{ teste, setTeste }}>
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

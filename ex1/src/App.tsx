import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Hello';
import { Provider, ContextProps } from './Context';

class App extends Component {

  state:ContextProps = {
    teste: 'abc',
    updateTeste: (val:string) => this.setState({teste:val})
  }

  render() {
    return (
      <Provider value={this.state}>
        <div className="App">
          <header className="App-header">
            <Home nome="Paulo Brito"/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;

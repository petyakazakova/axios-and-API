import React, { Component } from 'react';
import './App.css';
import TableComp from './TableComp/TableComp';


class App extends Component {
  render() {
    return(
      <div className="container">
        <h1>Brains</h1>
          <TableComp />
      </div>
    );
  }
}


export default App;

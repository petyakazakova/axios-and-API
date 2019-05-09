import React, { Component } from 'react';
import './App.css';
import TableComp from './TableComp/TableComp';

class App extends Component {
  render() {
    return(
      <div className="container">
        <h1>Brains</h1>
        <table className="responsive-table striped col s8">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Year of birth</th>
            <th>Children</th>
            <th>Profession</th>
          </thead>
          <tbody>
            <TableComp />
          </tbody>
        </table>
      </div>

    );
  }
}


export default App;

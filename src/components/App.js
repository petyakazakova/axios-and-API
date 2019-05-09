import React, { Component } from 'react';
import './App.css';
import TableComp from './TableComp/TableComp';

class App extends Component {
  render() {
    const isMobile = window.innerWidth <= 900;
    return(
      <div className="container">
        <h1>Brains</h1>
        <table className="responsive-table striped col s10">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Year of birth</th>
              <th>Children</th>
              {isMobile ? null : <th>Profession</th>}
            </tr>
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

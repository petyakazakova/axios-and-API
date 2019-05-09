import React from 'react';

const Table = ({item}) => (
  <div className="container s10">
    <table className="responsive-table striped">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Date of birth</th>
          <th>Children</th>
          <th>Profession</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id here</td>
          <td>{item.parent.name}</td>
          <td>birth</td>
          <td>children
            {/* <a href="/" className="btn-floating btn-small waves-effect waves-light blue"><i className="material-icons">+</i></a> */}
          </td>
          <td>profession</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Table;

import React from 'react';

const TableChildren = ({item}) => (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year of Birth</th>
            <th>Mother</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.numChildren.name}</td>
            <td>{item.numChildren.yearOfBirth}</td>
            <td>{item.numChildren.mother}</td>
          </tr>
        </tbody>
      </table>
  );


export default TableChildren;

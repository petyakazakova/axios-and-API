import React from 'react';

const TableBody = ({item}) => (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.yearOfBirth}</td>
      <td>{item.numChildren}
        {/* <a href="/" className="btn-floating btn-small waves-effect waves-light blue"><i className="material-icons">+</i></a> */}
      </td>
      <td>{item.profession}</td>
    </tr>
)

  export default TableBody;

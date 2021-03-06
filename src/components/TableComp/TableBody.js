import React from 'react';
import TableChildren from '../TableChildren/TableChildren';

// {typeof !item.numChildren === "number" && <ChildrenTable />}


const TableBody = ({item}) => (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.yearOfBirth}</td>
        <td>{typeof item.numChildren === "number" ? item.numChildren : item.numChildren.length}
          {typeof item.numChildren !== "number" ?
          <button className="btn-floating btn-small waves-effect waves-light blue accordion" >
            <i  className="material-icons">+</i>
          </button>

          : null}

        </td>

        {/* {typeof item.numChildren === "number" ? <td>{item.numChildren}</td> :
        <td className="collapsible-header">{item.numChildren.length}
          <div className="collapsible-body">
            <a href={TableChildren} className="btn-floating btn-small waves-effect waves-light blue"><i className="material-icons">
              +
            </i></a>
          </div>
        </td>} */}
        <td>{item.profession}</td>
        
      </tr>
  );





  export default TableBody;

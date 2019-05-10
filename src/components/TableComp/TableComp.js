import React, {Component} from 'react';
import axios from 'axios';

import TableChildren from '../TableChildren/TableChildren';
import IsLoading from '../IsLoading/IsLoading';

class TableComp extends Component {
    state = {
      parents: [],
      error: null,
      isLoading: true
    };

  componentDidMount() {
    setTimeout(function() {
      this.setState({
        isLoading: false,
      })
    }.bind(this),3000); //loading delay

    axios

      // EXTERNAL API LINK:
      // .get("https://randomuser.me/api/?results=5")
      // .then(response =>
      //
      //   // EXTERNAL API:
      //   //  The response we get from the API contains an object called data and that contains other objects.
      //   // The information we want is available in data.results, which is an array of objects containing the data of individual users.
      //   //map through the results array to obtain info for the users. The array of users is then used to set a new value for the users state
      //   response.data.results.map(user => ({
      //     name: `${user.name.first} ${user.name.last}`,
      //     username: `${user.login.username}`,
      //     email: `${user.email}`,
      //     image: `${user.picture.thumbnail}`
      //
      //   }))
      // )
      // .then(users => {
      //   this.setState({
      //     users,
      //     isLoading: false,
      //   });
      // })
      // .catch(error => this.setState({error, isLoading: false}));

      //MY OWN API JSON
      .get("https://api.myjson.com/bins/1c25mu")
      .then(response => {
        this.setState({
          isLoading: true,
          parents: response.data.parents
        });
      })
      .catch(error => this.setState({error, isLoading: false}));
  }

  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }

  // const isMobile = window.innerWidth <= 900;


  renderPeople() {

  }

  render(){
    const {isLoading, parents} = this.state;

    return(
      <table className="responsive-table striped col s10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Year of birth</th>
            <th>Children</th>
            <th>Profession</th>
          </tr>
        </thead>

          {!isLoading ? (
            //users.map(user => {
            parents.map(parent => {
              // const { id, name, yearOfBirth, numChildren, profession } = parent;
              const { id, name, yearOfBirth, numChildren, profession } = parent;
              // const { idChild, name,  } = parent;

              return (
                // <TableBody key={id} item={parent}/>
                <tbody>
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{yearOfBirth}</td>
                    <td>{typeof numChildren === "number" ? numChildren : numChildren.length}
                      {/* {typeof numChildren !== "number" ? */}
                      {typeof numChildren === "object" ?
                      <button className="btn-floating btn-small waves-effect waves-light blue" >
                        <i  className="material-icons">+</i>
                      </button>
                      : null}
                    </td>
                    <td>{profession}</td>
                    {/* <TableChildren key={id} item={parent}/> */}
                  </tr>
                  {/* COLLAPSIBLE TABLE */}
                  <tr>
                    <td>
                      <TableChildren key={idChild} item={parents}/>
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <IsLoading />)}

      </table>
    );
  }
}

export default TableComp;

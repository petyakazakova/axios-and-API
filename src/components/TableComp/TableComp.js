import React, {Component} from 'react';
import axios from 'axios';
import Table from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';

class TableComp extends Component {
  state = {
    parents: [],
    error: null,
    isLoading: true, //delay - display loading message
  };

  componentDidMount() {
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
      .get("https://api.myjson.com/bins/1gmgoi")
      .then(response => {
        this.setState({
          parents: response.data.parents,
          isLoading: false
        });
      })
      .catch(error => this.setState({error, isLoading: false}));
  }


  render(){
    const {isLoading, parents} = this.state;
    return(
          !isLoading ? (
            //users.map(user => {
            parents.map(parent => {
              const { id, name, yearOfBirth, numChildren, profession } = parent;
              // const { id } = parent;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{yearOfBirth}</td>
                  <td>{numChildren}
                    {/* <a href="/" className="btn-floating btn-small waves-effect waves-light blue"><i className="material-icons">+</i></a> */}
                  </td>
                  <td>{profession}</td>
                </tr>
              );
            })
          ) : (
            <p>Loading...</p>
          )

          
    );
  }
}

export default TableComp;

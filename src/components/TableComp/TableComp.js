import React, {Component} from 'react';
import axios from 'axios';

import IsLoading from '../IsLoading/IsLoading';

class TableComp extends Component {
    state = {
      persons: [],
      error: false,
      isLoading: true,
      loadingChild: false,
      activeParentId : null
    };

  componentDidMount() {
    setTimeout(async() => {
      //  The response we get from the API contains an object called data and that contains other objects.
      // The information we want is available in data.results, which is an array of objects containing the data of individual users.
      //map through the results array to obtain info for the users. The array of users is then used to set a new value for the users state
      // axios.all([

      try {
        //an array of persons with all children in it:
        //persons.data - the response
        await axios.get("http://assignment.siteimprove.com/api/persons")
        .then(persons => {
          persons.data.map(async(person, key) => {
            //dynamic value. make a request for each person
            console.log(person);
            await axios.get(`http://assignment.siteimprove.com/api/persondetails/${person.Id}`).then(children => {
              console.log(children.data);
              // MAGIC ::::::::
              person = {...person, children : children.data} //put person in a new object
              persons.data[key] = person; //persons at this specific position. persons[key] = person
              this.setState({persons : persons.data})
            })

          })
        })
        this.setState({
          isLoading: false
        });
      }
      catch(err){
        this.setState({
          error: true,
          isLoading: false
        })
      }
    },3000);
  }

  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }

  handleChildLoad = () => {
    setTimeout(() => {this.setState({loadingChild:false})},3000)
  }

  render(){
    let {isLoading, persons, error, activeParentId, loadingChild} = this.state; //destructuring
    // let isMobile = (window.screen.width < 900) ? true : false //mobile under 900
    return(
      <table className="responsive-table striped col s10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Year of birth</th>
            <th>Children</th>
            <th style={{display:(window.screen.width < 900) ? "none" : "block"}}>Profession</th>
          </tr>
        </thead>
          {(error && !isLoading) && <p>Ops! The data is not loading.</p>}
          {(isLoading && !error) && <IsLoading />}
          {(!isLoading && !error) &&

            persons.map(parent => {
              let { Id, Name, YearOfBirth, NumChildren, Profession } = parent; //destruct
              return (
                // <TableBody key={id} item={parent}/>
                <tbody>
                  <tr key={Id}>
                    <td>{Id}</td>
                    <td>{Name}</td>
                    <td>{YearOfBirth}</td>
                    <td>{NumChildren}
                      <button className="btn-floating btn-small waves-effect waves-light blue"
                        onClick={() => {
                          if(parent.Id === activeParentId){
                            this.setState({activeParentId: null})} else {
                              this.setState({
                              activeParentId : parent.Id,
                              loadingChild : true
                            })
                          }}}>
                        <i  className="material-icons">+</i>
                      </button>
                    </td>
                    <td style={{display:(window.screen.width < 900) ? "none" : "block"}}>{Profession}</td>
                    {/* <TableChildren key={id} item={parent}/> */}
                  </tr>
                  {(loadingChild && (activeParentId === parent.Id)) && <IsLoading />}
                  {loadingChild ? this.handleChildLoad() :
                  (parent.children && (activeParentId === parent.Id)) && parent.children.map((child, index) => {
                    //the array im mapping through is seperate -> persons[0]
                    let { Name, YearOfBirth, Mother } = child;
                    return(
                      <tr>
                        <td>
                          <table>
                            {index === 0 &&
                              (<thead>
                              <th>Name</th>
                              <th>Year of birth</th>
                              <th>Mother</th>
                            </thead>)}
                            <tbody>
                              <td>{Name}</td>
                              <td>{YearOfBirth}</td>
                              <td>{Mother}</td>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )
                  })
                  }
                </tbody>
              );
            })
          }

      </table>
    );
  }
}

export default TableComp;

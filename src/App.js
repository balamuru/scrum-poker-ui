import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
const SCRUM_POKER_BASE_URL = 'http://localhost:8080/api';

class App extends Component {
  state = {
    isLoading: true,
    issues: []
  }

  async componentDidMount() {
     const issuesUrl = `${SCRUM_POKER_BASE_URL}/issues/`;
     axios.get(issuesUrl).then(response => response.data)
     .then((data) => {
       this.setState({ issues: data._embedded.issues})
       this.setState({ isLoading: false})
       console.log(this.state.issues)
      })
 
     
  }


  
  // render() {
  //   return (
  //      <div className="container">
  //       <div className="col-xs-8">
  //       <h1>React Axios Example</h1>
  //         <div className="card">
  //           <div className="card-body">
  //             <h5 className="card-title">My User</h5>
  //           </div>
  //         </div>
  //       </div>
  //      </div>
  //   );
  // }

  render() {
    const {issues, isLoading} = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Issues List</h2>
            {issues.map(issues =>
              <div key={issues.id}>
                {issues.name}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}
export default App;
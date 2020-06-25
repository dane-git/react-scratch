import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo-2.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      something: 'this is state something',
      monsters: [
        {
          name: 'john',
          id: 'abc123'
        },
        {
          name: 'jack',
          id: 'abc124'
        },
        {
          name: 'jill',
          id: 'abc125'
        },
      ],
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="inline-wheels">
            <img src={logo} className="App-logo-1 justify-start" alt="logo" />
            <img src={logo2} className="App-logo-2" alt="logo" />
          </div>
          <div className="monster-names">
            {
              this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name} </h1>)
            }
          </div>
          <h3>{this.state.something}</h3>
          <br />

          <br />
          <div className="users">
            <table>
              <colgroup>
                <col style={{ backgroundColor: "rgba(30,30,30, .5)" }}></col>
                <col style={{ backgroundColor: "rgba(0,0,80, 0.5)" }}></col>
                <col style={{ backgroundColor: "rgba(50,50,50, 0.5)" }}></col>
                <col style={{ backgroundColor: "rgba(10,50,10, 0.5)" }}></col>
                <col style={{ backgroundColor: "rgba(70,60,10, 0.5)" }}></col>
                <col style={{ backgroundColor: "rgba(50,50,0, 0.5)" }}></col>
                <col style={{ backgroundColor: "rgba(0,0,70, 0.5)" }}></col>
                <col style={{ backgroundColor: "rgba(20,20,20, 0.5)" }}></col>
                <col style={{ backgroundColor: "rgba(50,0,0, 0.5)" }}></col>
              </colgroup>
              <tr style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Company</th>
                <th>CatchPrase</th>
                <th>BS</th>
                <th>Website</th>
                <th>Phone</th>
                <th>City</th>
              </tr>
              {this.state.users.map(user => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                  <td>{user.company.catchPhrase}</td>
                  <td>{user.company.bs}</td>
                  <td>{user.website}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </table>
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div >
    );
  }

}

export default App;

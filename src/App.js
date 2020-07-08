import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo-2.svg';
import './App.css';
import validator from 'validator';
import { weatherApp } from './weatherApp'

import { weather } from './weatherApp'


import { CardList } from './components/card-list/card-list.component'
// import React, { Component } from 'react';
import './weatherApp.css';
// import validator from 'validator';
import { weatherByWOEID } from './functions/weatherWOEID';
import { geoFetch } from './functions/geoFetchWeather';
import { getGeo } from './functions/getGeo'


async function getGeoAW() {
  const geo = await getGeo()
  console.log(geo)
  const fetchLocalArr = await geoFetch(geo)
  console.log(fetchLocalArr)
  let WOEID = fetchLocalArr[0].woeid
  const weather = await weatherByWOEID(WOEID)
  console.log(weather)
  return weather
}


// BREAK
let layerCount = 0;
// let thisThing = this.state.users
// console.log((this.state.users))
// define the thing gotten, 
let getKeysFromArrayFlag = false;
let getObjectKeysFlag = false;

function getType(thing) {
  let thingType = []
  thingType.push(thing)
  thingType.push(typeof (thing))
  return matchType(thingType)
} //end getType

// brach depending on type
function matchType(thingType) {
  let thing = thingType[0]
  let type = thingType[1]
  let layer1Keys, layer2Keys;
  if (Array.isArray(thing)) {
    layer2Keys = getKeysFromArray(thing)

  } else if (type === "object") {
    layer1Keys = getObjectKeys(thing)
    getObjectKeysFlag = true;
  } else if (type === "string") {
    if (validator.isNumeric(thing)) {
      let newThing = convertToNumeric(thing)
      thing = newThing;
    }
  }
  let obj = {
    layer1: layer1Keys,
    layer2: layer2Keys,
    thing: thing,
    arrKeyFlag: getKeysFromArrayFlag,
    objKeyFlad: getObjectKeysFlag

  }
  layerCount += 1;
  return obj
} //end matchType

function getKeysFromArray(arr) {
  console.log(arr)
  getKeysFromArrayFlag = true;
  let layerKeys = []
  // copy all surface keys
  for (let i = 0; i < arr.length; i++) {
    layerKeys.push(Object.keys(arr[i]))
  }

  //define a set 
  let aSet = new Set()

  layerKeys.forEach((each) => {
    if (Array.isArray(each)) {
      each.forEach(every => aSet.add(every))
    } else {
      console.log('error in getKeyse from array')
    }

  })

  return aSet
} // end getKeysFromArray

function getObjectKeys(thing) {
  let keyArr = []
  keyArr = Object.keys(thing)
  return keyArr
}

function convertToNumeric(thing) {
  return Number(thing)
}


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
      users: [],

    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ users: users })
      })
      .then((a) => {
        let something = getType(this.state.users)
        console.log(something)
        console.log(something.layer2)
        let objKeys = [
          {
            name: 'state.users'
          }
        ]
        if (objKeys[layerCount]) {
          objKeys[layerCount].push(something.layer)
        }

        // console.log(objKeys[layerCount])
      })

  }


  render() {
    // recurse
    console.log(this.state.users)
    return (
      <div className="App">
        <weather />
        <header className="App-header">
          <div className="inline-wheels">
            <img src={logo} className="App-logo-1 justify-start" alt="logo" />
            <img src={logo2} className="App-logo-2" alt="logo" />
          </div>
          <weatherApp></weatherApp>
          <CardList name="jack sparrow">
            {this.state.users.map(user => (
              <table>
                <tbody>
                  <tr>
                    <td className="category">Name</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td className="category">User Name</td>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <td className="category">Email</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td className="category">company</td>
                    <td>{user.company.name}</td>
                  </tr>
                  <tr>
                    <td className="category">comapany catch-phrase</td>
                    <td>{user.company.catchPhrase}</td>
                  </tr>
                  <tr>
                    <td className="category">BS</td>
                    <td>{user.company.bs}</td>
                  </tr>
                  <tr>
                    <td className="category">Website</td>
                    <td>{user.website}</td>
                  </tr>
                  <tr>
                    <td className="category">Phone</td>
                    <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <td className="category">City</td>
                    <td>{user.address.city}</td>
                  </tr>
                </tbody>
              </table>


            ))}
          </CardList>
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


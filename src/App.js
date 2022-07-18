import React, { useEffect, useState } from 'react';
import './App.css';
import Chart from './Component/Chart/Chart';
import User from './Component/User/User';
import axios from 'axios';


function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const url = 'https://randomuser.me/api/?results=4'
    axios(url)
      .then(userData => setUsers(userData.data.results))
  }, [])
  return (
    <div className="App">

      <h2>Our Team Members</h2>
      <hr />
      {
        users.map(user => <User user={user}></User>)
      }

      <hr />
      <div>
        <h3> Team Performance</h3>
        <hr />
        <Chart></Chart>
      </div>


    </div>
  );
}

export default App;

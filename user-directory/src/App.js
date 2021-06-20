import React, { setState} from 'react';
import './App.css';
import './index.css';
import Table from './components/Table'
import  Container from './components/Container';
// import {getUser, getUsers} from './utils/API'
import API from './utils/API'


function App() {

  //const [user, setUser] = setState("")

  const getUserData = () => {
    API.getUser()
    .then(res => console.log(res.data.results[0].name))
    .catch(err => console.log(err));
  }

  return (
    <div className="App">
    <h1>User Directory</h1>
    <Container>
      <Table />
    </Container>
      {getUserData()}
    </div>  
  );
}

export default App;

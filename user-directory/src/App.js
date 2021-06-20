import React from 'react';
import './App.css';
import './index.css';
import Table from './components/Table'
import  Container from './components/Container';




function App() {

  return (
    <div className="App">
    <h1>User Directory</h1>
    <Container>
      <Table />
    </Container>
      
    </div>  
  );
}

export default App;

import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Estudar'];

class App extends React.Component {
  render() {
   return(
     <ul>{tasks.map((element) => task(element))}</ul>
   );
  }
}

export default App;

import React from 'react';
import Ninjas from './Ninjas';



function App() {
  return (
    <div className="App">
      <h1>My first React App</h1>
      <p>Welcome</p>
      <Ninjas name="Ryu" age="25" belt="Black"/>
      <Ninjas name="Yoshi" age="35" belt="Brown"/>
    </div>
  );
}

export default App;

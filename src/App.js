import React from 'react';
import './App.css';
import Landing from './components/Landing'
import UnitSelector from './containers/UnitSelector';
import InputHandling from './containers/InputHandling';
function App() {

 return (
    <div className="App">
           <Landing/>
          <UnitSelector />
          <InputHandling />
    </div>
  );
}

export default App;

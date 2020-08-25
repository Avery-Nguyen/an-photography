import React from 'react';
import './styles/App.scss';
import About from './About/About'
import Stills from './Stills/Stills'

function App() {
  return (
    <div className="App">
      <header>Avery Nguyen Photography</header>
      <div className="info">
        <About/>
        <Stills/>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './styles/App.scss';
import About from './About/About'
import Stills from './Stills/Stills'

function App() {
  const [aboutHidden, setAboutHidden] = useState(true)
  const [stillHidden, setStillHidden] = useState(true)

  return (
    <div className="App">
      <header>Avery Nguyen Photography</header>
      <aside>Contact</aside>
      <div className="info">
        {aboutHidden && <About onChange={(value) => setStillHidden(value)}/>}
        {aboutHidden && stillHidden && <div className="border"></div>}
        {stillHidden && <Stills onChange={(value) => setAboutHidden(value)}/>}
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './styles/App.scss';
import About from './About/About'
import Stills from './Stills/Stills'

function App() {
  const [aboutHidden, setAboutHidden] = useState(true)
  const [stillHidden, setStillHidden] = useState(true)
  const [blur, setBlur] = useState(false)

  return (
    <div className={blur ? "App_blur" : "App"}>
      <header>Avery Nguyen Photography</header>
      <aside>Contact</aside>
      <div className="info">
        {aboutHidden && <About 
        onChange={(value) => setStillHidden(value)}
        onBlur={(value) => setBlur(value)}
        />}
        {aboutHidden && stillHidden && <div className="border"></div>}
        {stillHidden && <Stills 
        onChange={(value) => setAboutHidden(value)}
        onBlur={(value) => setBlur(value)}
        />}
      </div>
    </div>
  );
}

export default App;

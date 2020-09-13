import React, {useState, useEffect} from 'react';
import './styles/App.scss';
import About from './About/About'
import Stills from './Stills/Stills'
import AboutMobile from './About/AboutMobile'
import StillsMobile from './Stills/StillsMobile'

function App() {
  const [aboutHidden, setAboutHidden] = useState(true)
  const [stillHidden, setStillHidden] = useState(true)
  const [blur, setBlur] = useState(false)
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 479;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className={blur ? "App_blur" : "App"}>
      <header>Avery Nguyen Photography</header>
      <aside>Contact</aside>
      <div className="info">
        {
        aboutHidden && (width < breakpoint ? <AboutMobile
                                                onChange={(value) => setStillHidden(value)}
                                                onBlur={(value) => setBlur(value)}/> : 
                                             <About 
                                                onChange={(value) => setStillHidden(value)}
                                                onBlur={(value) => setBlur(value)}/> )
        
        }
        {aboutHidden && stillHidden && <div className="border"></div>}
        {
        stillHidden && (width < breakpoint ? <StillsMobile onChange={(value) => setAboutHidden(value)}
                                                           onBlur={(value) => setBlur(value)}/> : 
                                             <Stills 
                                                    onChange={(value) => setAboutHidden(value)}
                                                    onBlur={(value) => setBlur(value)}
                                                    />)
        }
      </div>
    </div>
  );
}

export default App;

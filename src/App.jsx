import React, {useState, useEffect} from 'react';
import './styles/App.scss';
import About from './About/About'
import Stills from './Stills/Stills'
import AboutMobile from './About/AboutMobile'
import StillsMobile from './Stills/StillsMobile'
import Drawer from '@material-ui/core/Drawer';




function App() {
  const [aboutHidden, setAboutHidden] = useState(true)
  const [stillHidden, setStillHidden] = useState(true)
  const [blur, setBlur] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 479;
  const [drawer, setDrawer] = useState(false)
  const [isAboutHidden, setIsAboutHidden] = useState(false);
  const [isStillsHidden, setIsStillsHidden] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const hideAbout = function() {
    if(isAboutHidden){
      setIsAboutHidden(false);
      setStillHidden(true);
    } else {
      setIsAboutHidden(true);
      setStillHidden(false);
    }
  };

  const hideStills = function() {
    if(isStillsHidden){
      setIsStillsHidden(false);
      setAboutHidden(true);
    } else {
      setIsStillsHidden(true);
      setAboutHidden(false);
    }
  };


  return (
    <div className={blur ? "App_blur" : "App"}>
      <header>
        <div className={'header_text'}>Avery Nguyen Photography</div>
        <div className={'header_text'} onClick={() => setDrawer(true)}>Content</div>
      </header>
      <Drawer anchor={'right'} open={drawer} onClose={()=> setDrawer(false)}>
            <div onClick={() => {
              setAboutHidden(true);
              setStillHidden(true);
            }}>Home</div>
            <div onClick={() => {
              setStillHidden(false); 
            
            }}>About</div>
            <div>Stills</div>
      </Drawer>
      <div className="info">
        {
        aboutHidden && (width < breakpoint ? <AboutMobile
                                                hide={hideAbout}
                                                isHidden={isAboutHidden}
                                                onBlur={(value) => setBlur(value)}/> : 
                                             <About 
                                                hide={hideAbout}
                                                isHidden={isAboutHidden}
                                                onBlur={(value) => setBlur(value)}/> )
        
        }
        {aboutHidden && stillHidden && <div className="border"></div>}
        {
        stillHidden && (width < breakpoint ? <StillsMobile 
                                                            hide={hideStills}
                                                            isHidden={isStillsHidden}
                                                           onBlur={(value) => setBlur(value)}/> : 
                                             <Stills 
                                                      hide={hideStills}
                                                      isHidden={isStillsHidden}
                                                    onBlur={(value) => setBlur(value)}
                                                    />)
        }
      </div>
    </div>
  );
}

export default App;

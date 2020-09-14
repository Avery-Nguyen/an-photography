import React, {useState, useEffect} from 'react';
import './styles/App.scss';
import './styles/drawer.scss'
import About from './About/About'
import Stills from './Stills/Stills'
import AboutMobile from './About/AboutMobile'
import StillsMobile from './Stills/StillsMobile'
import Drawer from '@material-ui/core/Drawer';



function App() {
  const [aboutHidden, setAboutHidden] = useState(true) // hides about component
  const [stillHidden, setStillHidden] = useState(true) // hides stills component
  const [blur, setBlur] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 479;
  const [drawer, setDrawer] = useState(false)
  const [isAboutHidden, setIsAboutHidden] = useState(false); //shows content of about
  const [isStillsHidden, setIsStillsHidden] = useState(false);//shows content of stills

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
        <div className={'header_text'} onClick={() => {
          setAboutHidden(true);
          setStillHidden(true);
          setIsAboutHidden(false);
          setIsStillsHidden(false);
          setDrawer(false);
        }}>Avery Nguyen Photography</div>
        <div className={'header_text'} onClick={() => setDrawer(true)}>Content</div>
      </header>
      <Drawer className='drawer' style={{width: '30%'}} anchor={'right'} open={drawer} onClose={()=> setDrawer(false)}>
            <div className={'drawer_text'} onClick={() => {
              setAboutHidden(true);
              setStillHidden(true);
              setIsAboutHidden(false);
              setIsStillsHidden(false);
              setDrawer(false);
            }}>Home</div>
            <div className={'drawer_text'} onClick={() => {
              setAboutHidden(true)
              setStillHidden(false); 
              setIsAboutHidden(true);
              setDrawer(false);
            }}>About</div>
            <div className={'drawer_text'} onClick={() => {
              setStillHidden(true)
              setAboutHidden(false);
              setIsStillsHidden(true);
              setDrawer(false);
            }}>Stills</div>
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

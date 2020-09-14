import React, {useState} from 'react';
import Gallery from "react-photo-gallery";
import { photos } from "../photos/photos";
import "../styles/Stills.scss"
// import { Grow } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
// import { useState } from "react";

function Stills(props) {
  // const [isHidden, setIsHidden] = useState(false);
  const [shown, setShown] = useState(false)

  // const hide = function() {
  //   if(isHidden){
  //     setIsHidden(false);
  //     props.onChange(true);
  //     // props.onBlur(true);
  //   } else {
  //     setIsHidden(true);
  //     props.onChange(false);
  //     // props.onBlur(false);
  //   }
  // };

  return (
    <div className="stills" 
    onMouseEnter={() => {
      setShown(true);
      props.onBlur(true);
    }
    }
    onMouseLeave={() => {
      setShown(false)
      props.onBlur(false);

    }
    }
    >
      <h1 id={props.isHidden ? "stills_center" : "stills"} onClick={props.hide}>Stills</h1>
      {props.isHidden && <Gallery photos={photos} />}
      {!props.isHidden &&
        <CSSTransition
        in={shown}
        timeout={2000}
        classNames="alert"
        unmountOnExit
        >
          <img className="img_hover" src='https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' alt='camera'></img> 
        </CSSTransition>
      }
    </div>
  );
}

export default Stills;
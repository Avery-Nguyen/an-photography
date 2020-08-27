import React, {useState} from 'react';
import Gallery from "react-photo-gallery";
import { photos } from "../photos/photos";
import "../styles/Stills.scss"
// import { useState } from "react";

function Stills(props) {
  const [isHidden, setIsHidden] = useState(false);
  const [shown, setShown] = useState(false)

  const hide = function() {
    if(isHidden){
      setIsHidden(false);
      props.onChange(true);
    } else {
      setIsHidden(true);
      props.onChange(false);
    }
  };

  return (
    <div className="stills" 
    onMouseEnter={() => setShown(true)}
    onMouseLeave={() => setShown(false)}
    >
      <h1 onClick={hide}>Stills</h1>
      {isHidden && <Gallery photos={photos} />}
      {!isHidden && shown && <img className="still_image" src='https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' alt='camera'></img>}
    </div>
  );
}

export default Stills;
import React, {useState} from 'react';
import Gallery from "react-photo-gallery";
import { photos } from "../photos/photos";
import "../styles/Stills.scss"

function StillsMobile(props) {
  const [isHidden, setIsHidden] = useState(false);

  const hide = function() {
    if(isHidden){
      setIsHidden(false);
      props.onChange(true);
      // props.onBlur(true);
    } else {
      setIsHidden(true);
      props.onChange(false);
      // props.onBlur(false);
    }
  };

  return (
    <div className="stills">
      <h1 id={isHidden ? "stills_center" : "stills"} onClick={hide}>Stills</h1>
      {isHidden && <Gallery photos={photos}/>}
    </div>
  );
}

export default StillsMobile;
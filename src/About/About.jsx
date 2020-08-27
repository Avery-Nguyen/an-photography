import React, {useState} from 'react';
import "../styles/About.scss";

function About(props) {

  const [isHidden, setIsHidden] = useState(false);

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
    <div className="about">
      <h1 onClick={hide}>About</h1>
      {isHidden && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum consectetur incidunt odio, repellat in, accusantium dicta adipisci earum repellendus qui maiores, reiciendis quis vel quisquam corporis voluptatem rerum dolorem.</p>}
    </div>
  );
}

export default About;

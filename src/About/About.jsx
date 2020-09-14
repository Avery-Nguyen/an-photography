import React, {useState} from 'react';
import "../styles/About.scss";
import { CSSTransition } from 'react-transition-group';

function About(props) {

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
    <div className="about"
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
      <h1 id={props.isHidden ? "about_cente" : "about_title"} onClick={props.hide}>About</h1>
      {props.isHidden && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum consectetur incidunt odio, repellat in, accusantium dicta adipisci earum repellendus qui maiores, reiciendis quis vel quisquam corporis voluptatem rerum dolorem.</p>}
      {!props.isHidden &&
        <CSSTransition
        in={shown}
        timeout={2000}
        classNames="alert2"
        unmountOnExit
        >
          <img className="img_hover" src='https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' alt='camera'></img> 
        </CSSTransition>
      }
    </div>
  );
}

export default About;

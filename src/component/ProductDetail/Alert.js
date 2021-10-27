import React from 'react';
import {Link} from 'react-router-dom';


const AlertComponent = (props) => {
 
return (
  <>
  <div>
  <img/>
  </div>
  <div>
    <button><Link to="/checkout">View Cart</Link></button>
    
    <button onClick={()=> {props.callback(false)}}>X</button>
    </div>
  </>
)
}
export default AlertComponent


import React, {userState, useState}from 'react';
import "./ProductDetail.css";
import AlertComponent from "./Alert";
import { IoCartOutline } from "react-icons/io5";


const ProductDetail = (props) => {
  console.log(props);
  console.log("state is ", props.location.state);
  console.log(props.location.state.product.image);

  const [showAlert, setShowAlert] = useState(false);

  const callbackfunction = (datafromchild) => {
    setShowAlert(datafromchild)
  }

  // Save a item to localStorage
  function addCart() {
    if(!localStorage.hasOwnProperty("product")) {
      // console.log('hi')
      localStorage.setItem("product",JSON.stringify([props.location.state.product]));
    } else {
      let product = JSON.parse(localStorage.getItem("product"));
      product.push(props.location.state.product);
      localStorage.setItem("product",JSON.stringify(product));
    }
  }

//  const AlertDismissibleExample = ()=> {
//     if (show) {
//       return (
//         <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//           <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//           <p>
//             Change this and that and try again. Duis mollis, est non commodo
//             luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//             Cras mattis consectetur purus sit amet fermentum.
//           </p>
//         </Alert>
//       );
//     }
//     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
//   }


  return (

    <>
      <div className="mainContainer">
        <div className="imgContainer">
          {/* <h1>{props.location.state.product.title}</h1> */}
          <img src={props.location.state.product.image} alt="photo" />
        </div>
        <div className="detailsContainer">
          <div>
            <h2>{props.location.state.product.title}</h2>
            <h6>{props.location.state.product.category}</h6>
            <h5>${props.location.state.product.price} CAD</h5>
            {/* Ineed to add this code inside "onClick" */}
            {/* <button onClick={addCart} >Add To Cart <IoCartOutline /></button> */}
            <button onClick={()=>{
              setShowAlert(true)
            }} >Add To Cart <IoCartOutline /></button> 
            {showAlert ? <AlertComponent callback={callbackfunction}/>  : null}
          </div>
          <div className="description">
            <h6>{props.location.state.product.title}</h6>
            <span>Details:</span>
            <br></br>
            <p>{props.location.state.product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

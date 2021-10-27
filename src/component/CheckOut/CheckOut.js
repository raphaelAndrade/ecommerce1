import React, { useEffect, useState } from 'react';
import './CheckOut.css';

//Components
import ShoppingCart from './ShoppingCart/ShoppingCart';
import PageTracker from './PageTracker/PageTracker';
import Form from './Form/Form';
import Payment from './Payment/Payment';

const prevUserData = [];
const isCartEmpty = [JSON.parse(localStorage.getItem('product'))];

const CheckOut = (props) => {

    //Boolean hook to define render
    const [isPayment, setIsPayment] = useState(false);
    const [userData, setUserDate] = useState('');

    //saving data and boolean from form
    const saveIsPaymentHandler = (udata, bool) => {
        console.log('CHECKOUT');
        console.log(udata);
        setIsPayment(bool);
        setUserDate((prevUserData) => {
            return [udata, ...prevUserData]
        })
    }

    const getPageTracker = (bool) => {
        setIsPayment(bool);
    }

    // if (isCartEmpty.length === 0) {
    //     return(
    //         <h2>Shopping Cart</h2>
    //         <p>Oops! Looks like your cart is empty. Continue Shopping</p>
    //     );

    // } else {
        return (
            <>
                <ShoppingCart />
                <PageTracker amIOnPayment={isPayment}
                    back={getPageTracker}
                />
                {/* Boolean to define render  */}
                {isPayment ?
                    <Payment formData={userData}
                        back={getPageTracker}
                    /> : <Form goToPayment={saveIsPaymentHandler} />
                }
            </>
        );
    // }
};

export default CheckOut;
import { useState } from 'react';
import './Payment.css'

import ShippingAddress from './ChildComponents/ShippingAddress';
import ShippingMethod from './ChildComponents/ShippingMethod';
import PaymentMethod from './ChildComponents/PaymentMethod';
import BillingAddress from './ChildComponents/BillingAddress';


const Payment = (props) => {
    // console.log(props.formData);
    // console.log(props.formData[0].firstName);
    const [shippingMehodValue, setShippingMehodValue] = useState();
    const [cartValue, setCartValue] = useState(700);
    const [total, setTotal] = useState('');
    const checkOutData = props.formData;

    const setShipValue = (shipmentValue) => {
        console.log('Payment component');
        console.log(shipmentValue);
        setTotal(cartValue + shippingMehodValue);
        setShippingMehodValue(shipmentValue);
    }

    const changeBtn = () => {
        props.back(false)
    }

    return (
        <>
            <div className='payment-container'>
                <form>
                    <ShippingAddress showData={checkOutData} change = {changeBtn} />
                    <ShippingMethod getValue={setShipValue} />
                    <PaymentMethod />
                    <BillingAddress />
                </form>
                <div>
                    {/* SUMMARY */}
                    <div id='summary' className='summary'>
                        <h4 className='summary-text'>Summary</h4>
                        <div className='subtotal-container'>
                            <p className='subtotal'>Subtotal:</p>
                            <span className='money'>$700.00</span>
                        </div>
                        {/* PASSAR ESSA PARTE PARA PAYMENT */}
                        <div className='subtotal-container'>
                            <p className='subtotal'>Shipping:</p>
                            <span className='money'>${shippingMehodValue}</span>
                        </div>
                        <hr></hr>
                        <div className='subtotal-container'>
                            <p className='subtotal'>Total:</p>
                            <span className='total-money'>
                                <span className='currency'>CAD</span>
                            ${total}</span>
                        </div>
                        <button id='payNow' className='proceed-btn'>Pay now</button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;
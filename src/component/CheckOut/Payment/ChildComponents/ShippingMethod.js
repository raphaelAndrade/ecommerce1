import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";


const ShippingMethod = (props) => {

    const [shipValue, setShipValue] = useState('');
    

    const handleChange = (e) => {
        // e.preventDefault();
        setShipValue(e.target.value);
        console.log(shipValue);
        // let value = shipValue.toFixed(2);
        props.getValue(shipValue);
    }

    return (
        <>
            <div className='payment-shipping'>
                <h2 className='shippingText'>Shipping method</h2>
                <form>
                    <div className='shipping-container'>
                        <label className='checkbox-shipping'>
                            <input
                                className='checkbox-ship'
                                type='radio'
                                name='shipping'
                                value={55}
                                onClick={handleChange}
                            />
                            <span className='checkbox-post'>Regular Post</span>
                            <span className='checkbox-price'>$ 55.00</span>
                        </label>
                        <label id='checkbox-shipMethod' className='checkbox-shipping'>
                            <input
                                className='checkbox-ship'
                                type='radio'
                                name='shipping'
                                value={75}
                                onClick={handleChange}
                            />
                            <span className='checkbox-post'>Express</span>
                            <span className='checkbox-price'>$ 75.00</span>
                        </label>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ShippingMethod;
import { useState } from 'react';
import './Summary.css'

const Summary = () => {

    const productsInCart = [JSON.parse(localStorage.getItem('product'))];
    const [total, setTotal] = useState('');

    const totalPrices = productsInCart[0].price;
    console.log('PRICES')
    console.log(totalPrices);

    // const totalCartPrice = (i) => {
    //     for (i = 0; i <= i.length; i++){
    //         let productPrice = [i.price];
    //         console.log('total');
    //         console.log(productPrice);
    //         let total = +productPrice;
    //         return total;
    //     }
    // }
    // const totalCartPrice = (p) => {
    //     return(
    //         totalPrices.map(price => p)
    //     )
    // }

    // console.log(totalCartPrice(totalPrices))

    return (
        <>
            {/* SUMMARY */}
            <div className='summary'>
                <h4 className='summary-text'>Summary</h4>
                <div className='subtotal-container'>
                    <p className='subtotal'>Subtotal:</p>
                    <span className='money'></span>
                </div>
                {/* PASSAR ESSA PARTE PARA PAYMENT */}
                {/* <div className='subtotal-container'>
                        <p className='subtotal'>Shipping:</p>
                        <span className='money'>$42.00</span>
                    </div>
                    <hr></hr>
                    <div className='subtotal-container'>
                        <p className='subtotal'>Total:</p>
                        <span className='total-money'>
                            <span className='currency'>CAD</span>
                            $742.00</span>
                    </div> */}
                {/* <button onClick={paymentProceedHandler(true)} className='proceed-btn'>Proceed to payment</button> */}
            </div>
        </>
    );
}

export default Summary;
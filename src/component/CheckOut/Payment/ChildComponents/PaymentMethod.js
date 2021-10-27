const PaymentMethod = () => {
    return (
        <>
            <div className='payment-shipping'>
                <h2 className='shippingText'>Payment</h2>
                <div className='paymentMethod-container'>
                    <div className='payment-method'>
                        <input className='checkbox-ship' type='radio' name='payment'></input>
                        <span className='paymentName'>Credit Card</span>
                    </div>
                    <div className="creditCard-details">
                        <div>
                            <input className='email-input' type='text' placeholder='Card number' />
                        </div>
                        <div>
                            <input className='email-input' type='text' placeholder='Name on card' />
                        </div>
                        <div>
                            <input id='creditCard' className='address-input' type='text' placeholder='Expiration date (MM/YY)' />
                            <input id='creditCard' className='address-input' type='text' placeholder='Security Code' />
                        </div>
                    </div>
                    <div id='noBorder' className='payment-method'>
                        <input className='checkbox-ship' type='radio' name='payment'></input>
                        <span className='paymentName'>PayPal</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentMethod;
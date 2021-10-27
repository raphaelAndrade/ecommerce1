const BillingAddress = () => {
    return (
        <>
            <div>
                <h2 className='shippingText'>Billing Address</h2>
                <div className='billing-address'>
                    <div className='payment-method'>
                        <input className='checkbox-ship' type='radio' name='billing'></input>
                        <span className='paymentName'>Same as shipping address</span>
                    </div>
                    <div id='noBorder' className='payment-method'>
                        <input className='checkbox-ship' type='radio' name='billing'></input>
                        <span className='paymentName'>Use a different billing address</span>
                    </div>
                </div>
            </div>
            <div id='saveInfo' className='checkbox-container'>
                <input className='checkbox' type='checkbox'></input>
                <span className='checkboxText'>Save my information for a faster checkout</span>
            </div>
        </>
    );
}

export default BillingAddress;
const ShippingAddress = (props) => {

    console.log("IN SHIPPING ADDRES");
    // console.log(props.showData);
    // console.log(props.showData[0].firstName);

    const changeBtnGoBack = () =>{
        props.changeBtn(false)
    }

    return (
        <>
            <h2 className='shippingText'>Shipping Address</h2>
            <p>Hello {props.showData[0].firstName} {props.showData[0].secondName}! Glad to have you with us. Please checkout your datas below! </p>
            <div className='contact-info'>
                <div className='payment-contact'>
                    <span className='payment-contactText'>Email</span>
                    <p className='payment-addressText'> {props.showData[0].email} </p>
                    <button onClick={changeBtnGoBack} className='change-btn'>Change</button>
                </div>
                <div id='shipTo-address' className='payment-contact'>
                    <span className='payment-contactText'>Ship to</span>
                    <p className='payment-addressText'> {props.showData[0].address}, {props.showData[0].city}-{props.showData[0].state} </p>
                    <button className='change-btn'>Change</button>
                </div>
            </div>
        </>
    );
}

export default ShippingAddress;
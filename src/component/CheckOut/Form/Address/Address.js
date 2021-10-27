import React, { useState } from 'react';
import './Address.css'



const Address = (props) => {

    const [enteredFirstName, setEnteredFirst] = useState('');
    const [enteredSecondName, setEnteredSecond] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredProvince, setEnteredProvince] = useState('');



    const firstNameChangeHandler = (e) => {
        e.preventDefault();
        setEnteredFirst(e.target.value);
    }
    const secondNameChangeHandler = (e) => {
        e.preventDefault();
        setEnteredSecond(e.target.value);
    }
    const addressChangeHandler = (e) => {
        e.preventDefault();
        setEnteredAddress(e.target.value);
    }
    const cityChangeHandler = (e) => {
        e.preventDefault();
        setEnteredCity(e.target.value);
    }
    const provinceChangeHandler = (e) => {
        e.preventDefault();
        setEnteredProvince(e.target.value);
    }

    const addressData = {
        firstName: enteredFirstName,
        secondName: enteredSecondName,
        add: enteredAddress,
        city: enteredCity,
        province: enteredProvince,
    }

    props.onSaveAddress(addressData);
    return (
        <>
            {/* ADDRESS */}
            <div className='address-container'>
                <h2 className='shippingAddress'>Shipping Address</h2>
                <div>
                    <input className='address-input'
                        type='text'
                        placeholder='First name'
                        value={enteredFirstName}
                        onChange={firstNameChangeHandler} />
                    <input className='address-input'
                        type='text'
                        placeholder='Last name'
                        value={enteredSecondName}
                        onChange={secondNameChangeHandler} />
                </div>
                <div>
                    <input className='email-input'
                        type='text'
                        placeholder='Address'
                        value={enteredAddress}
                        onChange={addressChangeHandler}
                    />
                </div>
                <div>
                    <input className='email-input'
                        type='text'
                        placeholder='Unit - apt, suite (optional)'
                    />
                </div>
                <div>
                    <input className='email-input'
                        type='text'
                        placeholder='City'
                        value={enteredCity}
                        onChange={cityChangeHandler} />
                </div>
                <div>
                    <input className='country-input'
                        type='text'
                        placeholder='Province'
                        value={enteredProvince}
                        onChange={provinceChangeHandler}
                    />
                    <input className='country-input'
                        type='text'
                        placeholder='Postal Code'
                    />
                </div>
                <div>
                    <input className='email-input'
                        type='text'
                        placeholder='Phone Number'
                    />
                </div>
            </div>
        </>
    );
}

export default Address;
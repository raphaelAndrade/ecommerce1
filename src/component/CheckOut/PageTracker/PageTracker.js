import './PageTracker.css'

const PageTracker = (props) => {

    const backToShipping = () => {
        alert("Are you sure you want to go back? You will have to start over!")
        props.back(false)
    }


    return (
        <>
            {/* Page Tracker */}
            {/* <div className='page-tracker'>
                <p id='ship' className='tracker-text'>Shipment</p>
                <div></div>
                <p id='pay' className='tracker-text'>Payment</p>
            </div> */}
            {props.amIOnPayment ?
                //ON PAYMENT
                <div className='page-tracker'>
                    <p onClick={backToShipping} id='pay2' className='tracker-text'>Shipment</p>
                    <div></div>
                    <p id='ship2' className='tracker-text'>Payment</p>
                </div> :
                //ON SHIP
                <div className='page-tracker'>
                    <p id='ship' className='tracker-text'>Shipment</p>
                    <div></div>
                    <p id='pay' className='tracker-text'>Payment</p>
                </div>}
        </>
    );
}

export default PageTracker;
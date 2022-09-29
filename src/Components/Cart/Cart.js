import React from 'react';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';

const Cart = ({ cart }) => {

    // console.log(cart);
    let total = 0;
    for (const activity of cart) {
        total = total + activity.Time;
    }

    const activityCompleted = () => {
       console.log('clicked')

    }


    return (
        <div className='cart'>
            <div className='cart-activity-time'>
                <h3>Activity Details</h3>
                <p>Activity time {total}Seconds</p>
                <p>Break time</p>

            </div>
            <div className='activity-btn'>
                <button onClick={activityCompleted(cart.id)}>Activity Completed</button>
            </div>


        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    // console.log(cart);
    let total = 0;
    for (const activity of cart) {
        total = total + activity.Time;
    }

    // let total=0;
    // for (activity of cart){
    //     console.log(activity)
    //     total=total+activity.Time;


    // }
    return (
        <div className='cart'>
            <div className='cart-activity-time'>
                <h3>Activity Details</h3>
                <p>Activity time {total}Seconds</p>
                <p>Break time</p>

            </div>
            <div className='activity-btn'>
                <button>Activity Completed</button>
            </div>


        </div>
    );
};

export default Cart;
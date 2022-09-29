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
        toast("Wow so easy!");

    }


    return (
        <div className='cart'>
            <div className='name'>
                <h3>Morjina Sulthana</h3>
                <div className='info'>
                <div>
                  <h5>weight<small>45kg</small></h5>
                  
                </div>
                <div>
                    <h5>Height <small>5</small> </h5>
                </div>
                
                </div>
                

            </div>
            <div className='break-button'>

                <button>10s</button>
                <button>20s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>


            </div>
            <div className='cart-activity-time'>
                <h3>Activity Details</h3>
                <p>Activity time {total}Seconds</p>
                <h4 className='cart-activity-time'>Break time</h4>
                </div>
                <div>

            </div>
            


        </div>
    );
};

export default Cart;
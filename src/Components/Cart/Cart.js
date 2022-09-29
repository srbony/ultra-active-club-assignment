import React from 'react';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';


const Cart = ({ cart }) => {


    // console.log(cart);
    let total = 0;
    for (const activity of cart) {
        total = total + activity.Time;
    }

    const activityCompleted = () => {
        toast("Wow so easy!");

    }
    const [brek, setBreak] = useState(0);
    const handleBreak = (brek) => {

        console.log(brek)


    }






    return (
        <div className='cart'>
            <div>
                <img src="" alt="" />
                <h4>Morjina sultana</h4>
                <p>Weight:45kg</p>
                <p>Height:5</p>

            </div>
            <div className='btn-container'>
                <h5>Add a Break</h5>
                <button onClick={handleBreak}>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <div>
                <h5>Activity Details</h5>
                <p>Activity time {total}Seconds</p>
                <p onClick={() => handleBreak}>Break time</p>

            </div>
            <button onClick={activityCompleted}>Activity Completed</button>
        </div>

    );
};

export default Cart;
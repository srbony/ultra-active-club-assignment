import React from 'react';
import { useState } from 'react';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';




const Cart = ({ cart }) => {

    const [data, setData] = useState(0);


    // console.log(cart);
    let total = 0;
    for (const activity of cart) {
        total = total + activity.Time;
    }
    //when get value fron input tag
    // const getDataFromButton = (e) => {
    //     setData(e.target.value);
    // }
    const getDataFromTag = (value) => {
        // setData(e.target.value);
        setData(value.target.innerText);
    }

    const activityCompleted = () => {
        toast("Activity Completed");
       
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

                {/* <input type="text" value="10s" onClick={getDataFromButton} /> */}

                <button onClick={getDataFromTag}> 10s</button>
                <button onClick={getDataFromTag}> 20s</button>
                <button onClick={getDataFromTag}> 30s</button>
                <button onClick={getDataFromTag}> 40s</button>
                <button onClick={getDataFromTag}> 50s</button>


            </div>
            <div>
                <h5>Activity Details</h5>
                <p className='activity-time'>Activity time <small>{total}Seconds</small></p>
                <p className='activity-time'>Break time <small>{data}seconds</small> </p>

            </div>
            <button className='activity-completed-btn' onClick={activityCompleted}>Activity Completed</button>
        </div>

    );
};

export default Cart;
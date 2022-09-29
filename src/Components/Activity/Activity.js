import React from 'react';
import './Activity.css'

const Activity = ({ activity, handleAddToCart }) => {
    // console.log(props);

    const { name, Time, id, img } = activity;
    // const { handleAddToCart } = props;



    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <h3 className='activity-name'>{name}</h3>
                <p>Time required:{Time}s</p>
            </div>

            <button onClick={() => handleAddToCart(activity)} className='activity-btn'>Add To List</button>
        </div>
    );
};

export default Activity;
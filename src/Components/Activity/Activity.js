import React from 'react';
import './Activity.css'

const Activity = (props) => {
    console.log(props);

    const { name, Time, id, img } = props.activity;
    // const { handleAddToCart } = props;



    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <h3 className='activity-name'>{name}</h3>
                <p>Time required:{Time}s</p>
            </div>

            <button onClick={() => props.handleAddToCart(props.activity)} className='activity-btn'>Add To List</button>
        </div>
    );
};

export default Activity;
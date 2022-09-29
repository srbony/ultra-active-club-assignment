
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Activities.css';

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setActivities(data))


    }, [])

    const handleAddToCart = (activity) => {
        const newCart = [...cart, activity];
        setCart(newCart);
        console.log(activity);
    }


    return (
        <div className="activitys-container" >

            <div className="activity-container">
                {/* <h2>Dailys Activities </h2> */}
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        handleAddToCart={handleAddToCart}


                    ></Activity>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Activities;





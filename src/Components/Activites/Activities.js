
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = () => {

    const [activities, setActivities] = useState([]);


    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setActivities(data))


    }, [])

    const handleAddToCart = (activity) => {
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
                <h2>this is cart</h2>
            </div>

        </div>
    );
};

export default Activities;





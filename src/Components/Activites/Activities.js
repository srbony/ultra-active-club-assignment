// import React from 'react';
// import './Activities.css';


// const Activities = () => {
//     const [activities, setActivities] = useState([]);


//     useEffect(() => {

//       fetch('fakedata.json')
//         .then(res => res.json())
//         .then(data =>setActivities(data))

//     }, [])

//     return (
//         <div className="activitys-container">
//             <div className="activity-container">
//                 <h2>Dailys Activities {activities.length}</h2>

//             </div>
//             <div className="cart-container">
//                 <h2>this is cart</h2>
//             </div>

//         </div>
//     );
// };

// export default Activities;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Activities.css';

const Activities = () => {

    const [activities, setActivities] = useState([]);


    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setActivities(data))


    }, [])

    return (
        <div className="activitys-container">
            <div className="activity-container">
                <h2>Dailys Activities {activities.length}</h2>

            </div>
            <div className="cart-container">
                <h2>this is cart</h2>
            </div>

        </div>
    );
};

export default Activities;





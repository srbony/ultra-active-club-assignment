import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='answer'>
            <div>
                <h3>Howe does react work?</h3>
                <p>Answer:
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
            </div>
            <div>
                <h3>props vs state</h3>
                <p>Answer:Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h3>useEffect works</h3>
                <p>
                    1.Running once on mount: fetch API data.
                    2.Running on state change: validating input field.
                    3.Running on state change: live filtering.
                    4.Running on state change: trigger animation on new array value.
                    5.Running on props change: update paragraph list on fetched API data update.
                </p>
            </div>

        </div>
    );
};

export default Answer;
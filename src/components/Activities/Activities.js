import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Activities.css'
const Activities = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))

    }, [])
    return (
        <div className="activity-container">
            <div className="exercises-container">
                {/* <h4>Select Today's Exercise</h4>
                exercises:{exercises.length} */}
                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}></Exercise>)
                    // exercises.map(exercise => console.log(exercise))
                }
            </div>

            <div className="task-board">
                dashboard

            </div>

        </div>
    );
};

export default Activities;
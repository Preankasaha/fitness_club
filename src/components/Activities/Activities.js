import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import TaskBoard from '../TaskBoard/TaskBoard';
import './Activities.css'
const Activities = () => {
    const [exercises, setExercises] = useState([]);
    const [taskBoard, setTaskBoard] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))

    }, [])
    const addHandlerToList = (exercise) => {
        console.log('clicked');
        console.log(exercise);
        const newTaskBoard = [...taskBoard, exercise]
        setTaskBoard(newTaskBoard);
    }
    return (
        <div className="activity-container">
            <div className="exercises-container">
                {/* <h4>Select Today's Exercise</h4>
                exercises:{exercises.length} */}
                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        addHandlerToList={addHandlerToList}
                    ></Exercise>)

                    // exercises.map(exercise => console.log(exercise))
                }
            </div>

            <div className="task-board">
                <TaskBoard taskBoard={taskBoard}></TaskBoard>

            </div>

        </div>
    );
};

export default Activities;
import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Exercise from '../Exercise/Exercise';
import TaskBoard from '../TaskBoard/TaskBoard';
import './Activities.css'
const Activities = () => {
    const [exercises, setExercises] = useState([]);
    const [taskBoard, setTaskBoard] = useState([]);



    useEffect(() => {
        fetch('fakedata.json')
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
        <div className='activity-container'>
            <div>
                <h4>Select Today's Exercise</h4>
                <div className="">
                    <div className="exercises-container">


                        {
                            exercises.map(exercise => <Exercise
                                key={exercise.id}
                                exercise={exercise}
                                addHandlerToList={addHandlerToList}
                            ></Exercise>)

                            // exercises.map(exercise => console.log(exercise))
                        }
                    </div>
                </div >
            </div>

            <div className="task-board">
                <div className="breaktime-container">
                    <BreakTime></BreakTime>

                </div>

                <div className="exercise-time-container">
                    <TaskBoard taskBoard={taskBoard}></TaskBoard>
                </div>

            </div>

        </div>
    );
};

export default Activities;
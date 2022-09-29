import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import TaskBoard from '../TaskBoard/TaskBoard';
import './Activities.css'
const Activities = () => {
    const [exercises, setExercises] = useState([]);
    const [taskBoard, setTaskBoard] = useState([]);
    const [breaktime, setBreaktime] = useState(0);



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

    const addHandlerToBreak = (breaktime) => {
        console.log('clicked');
        setBreaktime(breaktime);
    }
    return (
        <div className='activity-container'>
            <div className='info-container'>
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
                    {/* <BreakTime addHandlerToBreak={addHandlerToBreak}></BreakTime> */}

                    <div className='break-btn'>
                        <button onClick={() => addHandlerToBreak(10)}>10m</button>
                        <button onClick={() => addHandlerToBreak(20)}>20m</button>
                        <button onClick={() => addHandlerToBreak(30)}>30m</button>
                        <button onClick={() => addHandlerToBreak(40)}>40m</button>
                        <button onClick={() => addHandlerToBreak(50)}>50m</button>
                    </div>
                    <p>Break Time: {breaktime}m</p>
                </div>

                <div className="exercise-time-container">
                    <TaskBoard taskBoard={taskBoard}></TaskBoard>
                </div>

            </div>

        </div>
    );
};

export default Activities;
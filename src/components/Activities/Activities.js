import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import TaskBoard from '../TaskBoard/TaskBoard';
import { addTODb, getStoredData } from '../Utilities/Fakedb';
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

    useEffect(() => {
        const getStoredTime = getStoredData();
        setBreaktime(getStoredTime);

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
        addTODb(breaktime);
    }
    return (
        <div className='activity-container'>
            <div className='info-container'>
                <h4 className='activitiy-title'>SELECT TODAY's EXERCISE</h4>
                <div className="">
                    <div className="exercises-container">

                        {
                            exercises.map(exercise => <Exercise
                                key={exercise.id}
                                exercise={exercise}
                                addHandlerToList={addHandlerToList}
                            ></Exercise>)

                        }
                    </div>
                </div >
            </div>

            <div className="task-board">
                <PersonalInfo></PersonalInfo>
                <div className="breaktime-container">
                    <h3>Add a Break</h3>
                    <div className='break-btn-container'>
                        <button onClick={() => addHandlerToBreak(10)} className='break-btn'
                        >10m</button>
                        <button onClick={() => addHandlerToBreak(20)} className='break-btn'>20m</button>
                        <button onClick={() => addHandlerToBreak(30)} className='break-btn'>30m</button>
                        <button onClick={() => addHandlerToBreak(40)} className='break-btn'>40m</button>
                        <button onClick={() => addHandlerToBreak(50)} className='break-btn'>50m</button>
                    </div>
                    <h5>Break Time: {breaktime}m</h5>
                </div>

                <div className="exercise-time-container">
                    <TaskBoard taskBoard={taskBoard}></TaskBoard>
                </div>

            </div>

        </div>
    );
};

export default Activities;
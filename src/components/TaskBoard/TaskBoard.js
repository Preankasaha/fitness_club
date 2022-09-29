import React from 'react';
import './TaskBoard.css'

const TaskBoard = ({ taskBoard }) => {
    console.log(taskBoard);
    // console.log(taskBoard);
    let timing = 0;
    for (const exercise of taskBoard) {
        timing = timing + exercise.timing;
        console.log(timing);
        console.log(exercise.timing);
    }

    return (
        <div>
            <div>
                <h3>Add a break</h3>
                <button className='group-btn'>10s</button>
                <button className='group-btn'>20s</button>
                <button className='group-btn'>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>

            <h3>Exercise Details</h3>
            <p>selected exercises: {taskBoard.length}</p>
            <p>Exercise Time: {timing}m</p>
            <p>Break Time: </p>

        </div>
    );
};

export default TaskBoard;
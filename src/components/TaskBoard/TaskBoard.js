import React from 'react';
import './TaskBoard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Congratulation! Good Job!! Activity completed");

const TaskBoard = ({ taskBoard }) => {
    // console.log(taskBoard);
    // console.log(taskBoard);
    let timing = 0;
    for (const exercise of taskBoard) {
        timing = timing + exercise.timing;
        console.log(timing);
        console.log(exercise.timing);
    }

    return (
        <div>

            <h3>Exercise Details</h3>
            <h5>Exercise Time: {timing}m</h5>

            <div>
                <button className='toast-btn' onClick={notify}>Activity completed</button>
                <ToastContainer />
            </div>


        </div>
    );
};

export default TaskBoard;
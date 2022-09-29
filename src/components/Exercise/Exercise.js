import React from 'react';
import './Exercise.css'


const Exercise = ({ addHandlerToList, exercise }) => {
    // console.log(exercise);
    // const { addHandlerToList, exercise } = props;
    const { image, timing, name } = exercise;
    return (
        <div className='exercise-info'>
            <img src={image} alt="" />
            <div>
                <h4>{name}</h4>
                <h5>Time: {timing}m</h5>
            </div>
            <button onClick={() => addHandlerToList(exercise)} className='list-btn'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Exercise;
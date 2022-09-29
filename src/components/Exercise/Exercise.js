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
                <p>{name}</p>
                <p>Time: {timing}m</p>
            </div>
            <button onClick={() => addHandlerToList(exercise)} className='list-btn'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Exercise;
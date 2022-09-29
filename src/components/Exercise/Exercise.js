import React from 'react';
import './Exercise.css'


const Exercise = ({ addHandlerToList, exercise }) => {

    const { image, timing, name } = exercise;
    return (
        <div className='exercise-info'>
            <img src={image} alt="" />
            <div>
                <h3 className='activity'>{name}</h3>
                <p className='time'>Time: {timing}m</p>
            </div>
            <button onClick={() => addHandlerToList(exercise)} className='list-btn'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Exercise;
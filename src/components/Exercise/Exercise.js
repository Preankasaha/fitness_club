import React from 'react';
import './Exercise.css'
const Exercise = ({ exercise }) => {
    // console.log(exercise);
    const { image, time, name } = exercise;
    return (
        <div className='exercise-info'>
            <img src={image} alt="" />
            <div>
                <p>{name}</p>
                <p>Time: {time}m</p>
            </div>
            <button className='list-btn'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Exercise;
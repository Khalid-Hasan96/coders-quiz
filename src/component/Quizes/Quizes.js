import React from 'react';
import { Link } from 'react-router-dom';
import './Quizes.css'

const Quizes = ({ quiz }) => {
    const { id, logo, name, total } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='flex justify-between items-center mt-5'>
                <div className='p-2'>
                    <h4 className='text-xl font-bold'>{name}</h4>
                    <p>Total Quiz: {total}</p>
                </div>
                <div>
                    <button className='btn btn-success hover:bg-green-500'><Link to={`/quiz/${id}`}>Start Quiz</Link ></button>
                </div>
            </div>
        </div>
    );
};

export default Quizes;
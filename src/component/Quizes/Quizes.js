import React from 'react';
import './Quizes.css'

const Quizes = ({ quiz }) => {
    console.log(quiz);
    const { logo, name, total } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='flex justify-between items-center mt-5'>
                <div className='p-2'>
                    <h4 className='text-xl font-bold'>{name}</h4>
                    <p>Total Quiz: {total}</p>
                </div>
                <div>
                    <button className='btn btn-success hover:bg-green-500'>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Quizes;
import React from 'react';

const QuestionAns = ({ questionAns }) => {
    console.log(questionAns)
    const { question, options } = questionAns;

    return (
        <div className=''>
            <div className='border rounded-lg w-3/4 mx-auto bg-sky-200 my-5 p-5'>
                <h1 className='text-center font-bold text-2xl mb-3'>{question}</h1>
                <div className='grid grid-cols-2 gap-4 mx-6'>
                    {
                        options.map(option => <div className='flex items-center bg-white border rounded-lg p-2'>
                            <p><input type="radio" name="ans" /><span className='ml-2'>{option}</span></p>
                        </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default QuestionAns;
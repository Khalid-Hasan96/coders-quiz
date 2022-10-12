import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionAns = ({ questionAns }) => {
    const { question, options, correctAnswer } = questionAns;
    const showCorrectAnswer = () => {
        toast(`Correct Answer is "${correctAnswer}"`);
    }
    const verifyAnswer = option => {
        if (option === `${correctAnswer}`) {
            toast('Congratulations!!! Your Answer is Right.')
        } else {
            toast('Wrong Answer')
        }
    }
    return (
        <div>
            <div className='border rounded-lg w-3/4 mx-auto bg-sky-200 my-5 p-5'>
                <div className='flex justify-between items-center pl-6 pr-6 font-bold text-2xl mb-3'>
                    <h1>{question}</h1>
                    <button title='Show Answer'><svg onClick={showCorrectAnswer} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </button>
                </div>


                <div className='grid grid-cols-2 gap-4 mx-6'>
                    {
                        options.map(option => <div className='flex items-center bg-white border rounded-lg p-2'>
                            <p>
                                <input type="radio" name="ans" onClick={() => verifyAnswer(option)} />
                                <span className='ml-2'>{option}</span>
                            </p>
                        </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default QuestionAns;
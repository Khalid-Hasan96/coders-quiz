import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import MainImg from '../../images/main.svg';

const Home = () => {
    const getQuizContainer = useLoaderData();
    const quizContainer = getQuizContainer.data;

    return (
        <div className='w-11/12 m-auto mt-5'>
            <div className='sm:flex flex-col items-center justify-center p-4 bg-yellow-100 rounded-lg md:flex-row'>
                <div className='sm:w-4/4 md:w-2/4'>
                    <h4 className='text-xl font-semibold'>Hello developers. Welcome to <Link to='/' className='text-2xl text-yellow-400'>Coders Quiz</Link>. Is your basic knowledge about CSS, JavaScript, React & Git is strong? Then participate quizes on our website. We have made some question for you to answer. Let's see how much you can answer. GOOD LUCK!!! </h4>
                </div>
                <div className='sm:w-4/4 md:w-2/4'>
                    <img src={MainImg} alt="" />
                </div>
            </div>

            <h1 className='text-center mt-12 text-3xl font-bold bg-yellow-300 w-1/4 mx-auto py-4 rounded-lg'>Topics</h1>

            <div className='sm:grid grid-cols-1 gap-4 p-5 md:grid-cols-2 mt-5 lg:grid-cols-4'>
                {
                    quizContainer.map(quiz => <Quizes key={quiz.id} quiz={quiz}></Quizes>)
                }
            </div>
        </div>
    );
};

export default Home;
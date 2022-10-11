import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import MainImg from '../../images/main.svg';

const Home = () => {
    const getQuizContainer = useLoaderData();
    const quizContainer = getQuizContainer.data
    return (
        <div className='w-11/12 m-auto mt-5'>
            <div className='flex items-center justify-center p-4'>
                <div className='w-2/4'>
                    <h4 className='text-xl font-semibold'>Hello developers. Welcome to <Link to='/' className='text-2xl text-yellow-400'>Coders Quiz</Link>. Is your basic knowledge about CSS, JavaScript, React & Git is strong? Then participate quizes on our website. </h4>
                </div>
                <div className='w-2/4'>
                    <img src={MainImg} alt="" />
                </div>
            </div>
            <div className='sm:grid grid-cols-1 gap-4 p-5 md:grid-cols-4'>
                {
                    quizContainer.map(quiz => <Quizes key={quiz.id} quiz={quiz}></Quizes>)
                }
            </div>
        </div>
    );
};

export default Home;
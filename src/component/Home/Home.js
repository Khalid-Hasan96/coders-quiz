import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import MainImg from '../../images/main.png';

const Home = () => {
    const getQuizContainer = useLoaderData();
    const quizContainer = getQuizContainer.data
    return (
        <div className='w-11/12 m-auto'>
            <div className='flex items-center justify-center p-5 border border-black'>
                <div className='w-2/4'>
                    <h4 className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit odio autem ad suscipit in facere molestiae velit nemo. Minima alias aut, voluptatum impedit, repudiandae molestias doloribus voluptatibus quisquam unde, culpa repellendus sint cupiditate est? Ex impedit possimus eaque et delectus sed veniam, obcaecati, quisquam fugiat, soluta eos alias modi sapiente.</h4>
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
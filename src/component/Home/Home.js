import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const getQuizContainer = useLoaderData();
    const quizContainer = getQuizContainer.data
    return (
        <div>
            {
                quizContainer.map(quiz => console.log(quiz))
            }
        </div>
    );
};

export default Home;
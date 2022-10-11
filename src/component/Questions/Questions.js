import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const questions = useLoaderData();
    console.log(questions)
    return (
        <div>
            <h4>question</h4>
        </div>
    );
};

export default Questions;
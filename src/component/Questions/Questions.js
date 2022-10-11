import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionAns from '../QuestionAns/QuestionAns';

const Questions = () => {
    const questions = useLoaderData();
    const questionContainer = questions.data.questions;
    console.log(questionContainer)
    return (
        <div>
            {
                questionContainer.map(question => <QuestionAns key={question.id} questionAns={question}></QuestionAns>)
            }
        </div>
    );
};

export default Questions;
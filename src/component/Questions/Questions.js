import { useLoaderData } from 'react-router-dom';
import QuestionAns from '../QuestionAns/QuestionAns';

const Questions = () => {
    const questions = useLoaderData();
    const questionContainer = questions.data.questions;
    const topic = questions.data.name;

    return (
        <div>
            <h1 className='mt-12 w-3/4 mx-auto text-center bg-yellow-200 font-bold text-2xl underline py-5 rounded-lg'>Quiz Topic: {topic}</h1>
            {
                questionContainer.map(question =>
                    <QuestionAns key={question.id} questionAns={question}></QuestionAns>
                )
            }
        </div>
    );
};

export default Questions;

import { useLoaderData } from 'react-router-dom';
import QuestionAns from '../QuestionAns/QuestionAns';

const Questions = () => {
    const questions = useLoaderData();
    const questionContainer = questions.data.questions;

    return (
        <div>
            {
                questionContainer.map(question => <QuestionAns key={question.id} questionAns={question}></QuestionAns>)
            }
        </div>
    );
};

export default Questions;
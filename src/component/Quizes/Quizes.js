import { Link } from 'react-router-dom';
import './Quizes.css';


const Quizes = ({ quiz }) => {
    const { id, logo, name, total } = quiz;

    return (
        <div className='quiz bg-yellow-200 mb-5 sm:w-4/5 mx-auto'>
            <img className='border border-black bg-gray-200' src={logo} alt="" />
            <div className='flex justify-between items-center mt-5'>
                <div className='p-2'>
                    <h4 className='text-xl font-bold'>{name}</h4>
                    <p>Total Quiz: {total}</p>
                </div>
                <div>
                    <button className='btn btn-success hover:bg-green-500'><Link to={`/${id}`}>Start Quiz</Link ></button>
                </div>
            </div>

        </div>
    );
};

export default Quizes;
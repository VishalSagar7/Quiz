import React from 'react'
import { useNavigate } from 'react-router-dom';

const QuizEnded = () => {

    const navigate = useNavigate();

    return (
        <div className='h-[100vh] w-[100vw] bg-white flex items-center'>
            <div className='h-400px w-full h-[150px] flex flex-col items-center justify-around'>
                <h1 className='text-3xl font-bold text-gray-900'>Quiz ended!</h1>
                <button
                    onClick={() => navigate('/result')}
                    className='btn btn-wide btn-primary'>See results</button>
            </div>
        </div>
    )
}

export default QuizEnded;

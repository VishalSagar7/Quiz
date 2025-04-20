import React from 'react'
import { useNavigate } from 'react-router-dom';

const StartQuizPage = () => {

    const navigate = useNavigate();


    return (
        <div className='h-[100vh] w-[100vw] bg-white flex items-center justify-center'>
            <button
                className="btn btn-lg "
                onClick={() => {
                    
                    navigate('/quiz');
                    
                }}
            >
                Start Quiz
            </button>
        </div>
    )
}

export default StartQuizPage;

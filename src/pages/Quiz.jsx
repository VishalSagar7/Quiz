import React, { useEffect, useState } from 'react';
import SentenceCard from '../components/SentenceCard';
import questions from '../Data';
import { addAnswer } from '../store/answerSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Quiz = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [timeLeft, setTimeLeft] = useState(10);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentQuestion = questions[currentQuestionIndex];


    useEffect(() => {
        if (timeLeft === 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    // Move to next question when timeLeft reaches 0
    useEffect(() => {
        if (timeLeft === 0) {
            if (currentQuestionIndex < questions.length - 1) {
                dispatch(addAnswer(
                    {
                        currentQuestion,
                        selectedOption: selectedOption ? selectedOption : null
                    }
                ));
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedOption('');
                setTimeLeft(10); // reset timer for next question
            } else {
                console.log("Quiz Ended");
                navigate('/quizended')

            }
        }
    }, [timeLeft]);

    return (
        <div className='h-[100vh] w-[100vw] bg-white relative'>
            <div className='absolute top-5 right-5 text-lg font-semibold text-blue-600'>
                Time Left: {timeLeft}s
            </div>

            <SentenceCard
                currentQuestion={currentQuestion}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
            />


        </div>
    );
};

export default Quiz;

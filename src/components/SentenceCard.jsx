import React from 'react';
import { addAnswer } from '../store/answerSlice';
import { useDispatch } from 'react-redux';
import questions from '../Data';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const SentenceCard = ({ currentQuestion,
    selectedOption,
    setSelectedOption,
    setCurrentQuestionIndex,
    currentQuestionIndex,
    setTimeLeft
}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmitAnsButton = () => {

        dispatch(addAnswer(
            {
                currentQuestion ,
                selectedOption: selectedOption ? selectedOption : null
            }
        ));


        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setTimeLeft(10); // reset timer for next question
        } else {
            console.log("Quiz Ended");
            // optionally navigate to result page
            navigate('/quizended');
        }




    }

    return (
        <div className='min-w-[600px] text-black min-h-[150px] shadow-lg absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] px-[20px] py-[15px] rounded bg-white'>
            <p className='text-lg mb-4'>
                <span className='mr-2 font-semibold'>{currentQuestion?.id}.</span>
                {currentQuestion?.sentence.replace("___", "______")}
            </p>

            <div className='options grid grid-cols-2 gap-4'>
                {currentQuestion?.options?.map((option, index) => (
                    <label
                        key={index}
                        className='flex items-center gap-2 cursor-pointer text-lg'
                    >
                        <input
                            type="radio"
                            name={`question-${currentQuestion?.id}`}
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => setSelectedOption(option)}
                            className="radio radio-sm radio-primary bg-white"
                        />
                        {option}
                    </label>
                ))}
            </div>
            <button
                className="btn mt-4 btn-primary block ml-auto"
                onClick={() => handleSubmitAnsButton(currentQuestion)}
            >
                Submit
            </button>

            {/* <div className='flex justify-between mt-4'>

                <div className="tooltip" data-tip="Previous" >
                    <button
                    className=' btn btn-outline btn-sm btn-primary '
                >
                        <GrFormPrevious/>
                    </button>
                </div>

                <div className="tooltip" data-tip="Next" >
                    <button
                        className=' btn btn-outline btn-sm btn-primary '
                    >
                        <MdOutlineNavigateNext/>
                    </button>
                </div>

            </div> */}
        </div>
    );
};

export default SentenceCard;

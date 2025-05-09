import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearAnswers } from '../store/answerSlice';

const Result = () => {
  const { list } = useSelector(store => store.answerSlice);

  //  Calculate score
  const score = list?.reduce((acc, item) => {
    return item?.selectedOption?.trim() === item?.currentQuestion?.correct?.trim() ? acc + 1 : acc;
  }, 0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearAnswers());
    navigate('/')
  }

  

  return (
    <div className='min-h-[100vh] w-[100vw] bg-white text-black flex flex-col items-center'>
      <h1 className="text-2xl font-bold mt-6">Your Score: {score} / {list?.length}</h1>
      <button onClick={()=> handleClearList()} className='absolute btn py-2 w-[150px] bg-blue-500 top-5 right-5 text-lg font-semibold text-white text-center rounded'>
        Go back
      </button>

      <div className='w-[600px] h-full mt-4'>
        {
          list?.map((item) => (
            <div className='px-2 py-4 mt-2 border-b border-blue-800' key={item?.currentQuestion?.id}>
              <p className='text-lg'>
                <span>{item?.currentQuestion?.id}.</span> {item?.currentQuestion?.sentence}
              </p>

              <div className='options grid grid-cols-2 gap-4'>
                {item?.currentQuestion?.options?.map((option, index) => (
                  <label key={index} className={`flex items-center gap-2 cursor-pointer text-lg`}>
                    <input
                      type="radio"
                      name={`question-${item?.currentQuestion?.id}`}
                      value={option}
                      readOnly
                      checked={option.trim() === item?.selectedOption?.trim()}
                      className="radio radio-sm radio-primary bg-white"
                    />
                    {option}
                  </label>
                ))}
              </div>

              <p className='font-semibold mt-2'>
                <span className='text-gray-600 text-sm'>Correct answer : </span>
                {item?.currentQuestion?.correct}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Result;

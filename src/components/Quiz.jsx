import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {QuizData} from '../QuizData/QuizData';
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clickOption, setClickOption] = useState(0)
    const [showResult, setShowResult] = useState(false)


    const changeQuestion =()=>{
        updateScore();
        if(currentQuestion<QuizData.length-1)
            {
            setCurrentQuestion(currentQuestion+1);
            setClickOption(0);
            }
        else{
            setShowResult(true);
        }
    }

    const updateScore=()=>{
        if(clickOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }

    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickOption(0);
        setScore(0)
    }


  return (
        <><center className='center'>
            <div className='heading-text text-white'>
                <h1>React Quiz App</h1>
            </div>
            <div className="container">
                   
                        
                <div className="quiz-container">
                         {
                            showResult ? (
                                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
                            ):(
                            <>
                    <div className="q-container" >
                        <span id='question-number'>{currentQuestion+1}.</span>
                        <span id='question-text'>{QuizData[currentQuestion].question}</span>
                    </div>
                    <div className="option-container">
                        {QuizData[currentQuestion].options.map((option,i)=>{
                                return(
                                    <button 
                                    className={`option-btn ${
                                        clickOption == i+1?"checked":null
                                    }`}
                                    key = {i}
                                        onClick={()=>setClickOption(i+1)}>
                                        {option}
                                    </button>
                                )
                            })}
                    </div>
                    <div className="next-button">
                        <button type='button' className='btn btn-primary' onClick={changeQuestion}>Next Quiz</button>
                    </div>   
                </>)}

                </div>
            </div>
            </center>
        </>
    )
}

export default Quiz
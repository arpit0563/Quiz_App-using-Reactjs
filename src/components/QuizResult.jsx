import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div>
        Your Score:{props.score}<br/>
        Total Score: {props.totalScore}
    </div>
    <div>
        <button type='button' id = 'next-button' className='btn btn-danger' onClick={props.tryAgain}>Next Quiz</button>
    </div>
    </>
  )
}

export default QuizResult

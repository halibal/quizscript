import React from 'react';

function Home({ startQuiz, questionsLength }) {

    return (
        <div>
            <h1 className="title">QuizCript</h1>
            <h2 className='description'>Welcome to Javascript Quiz</h2>
            <h3 className='description'>
                This Quiz Consists of <span style={{ fontWeight: 'bold' }}>{questionsLength}</span> questions
            </h3>
            <button className="start-button" onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}

export default Home;
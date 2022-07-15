import React from 'react';

function Home({ startQuiz }) {

    return (
        <div>
            <h1 className="title">QuizCript</h1>
            <h2 className='description'>Welcome to Javascript Quiz</h2>
            <h3 className='description'>
                This Quiz Consists of <span style={{ fontWeight: 'bold' }}>{10}</span> questions
            </h3>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}

export default Home;
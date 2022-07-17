import React from 'react';

function QuizQuestion({ id, questionText, answerOptions, setQuestions, isHeld }) {


    function selectAnswer(id) {

        // ----------this is where i have problems at the moment----------
        setQuestions(oldQuestionsArray => oldQuestionsArray.map(question => {
            return (
                {
                    ...question,
                    answerOptions: question.answerOptions.map(option => {
                        return option.id === id
                            ? { ...option, isHeld: !option.isHeld }
                            : option
                    })
                }
            )
        }))
        // ----------this is where i have problems at the moment----------
    };


    const styles = {
        border: isHeld && "none",
        backgroundColor: isHeld && "rgba(0, 75, 236, 0.39)"
    };

    return (
        <div>
            <h2>Q{id}.{questionText}</h2>
            <div className="buttons-container">
                {
                    answerOptions.map((answerOption) => {
                        return (
                            <button
                                key={answerOption.id}
                                style={styles}
                                className='option-buttons'
                                onClick={() => selectAnswer(answerOption.id)}
                            >
                                {answerOption.answerText}
                            </button>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
};

export default QuizQuestion;
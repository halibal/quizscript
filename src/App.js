import { useState } from 'react';
import Home from './pages/Home';
import QuizQuestion from './pages/QuizQuestion';
import questionsData from './data';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
	const [quizStatus, setQuizStatus] = useState(true);

	const [questions, setQuestions] = useState(newQuestionsData());

	function startQuiz() {
		setQuizStatus(true);
	}

	function newQuestionsData() {
		const newQuestionsDataArray = questionsData.map(data => {
			return (
				{
					...data,
					answerOptions: data.answerOptions.map(answerOption => {
						return (
							{
								...answerOption,
								id: nanoid()
							}
						)
					})
				}
			)
		})

		return newQuestionsDataArray;
	}

	console.log(questions);


	const quizQuestions = questions.map(question => {
		return (
			<QuizQuestion
				key={question.id}
				id={question.id}
				questionText={question.questionText}
				answerOptions = {question.answerOptions}
				isHeld={question.isHeld}
				setQuestions={setQuestions}
			/>
		)
	})

	return (
		<div className="App">
			{
				quizStatus
					? quizQuestions
					: <Home startQuiz={startQuiz} />
			}
		</div>
	);
}

export default App;

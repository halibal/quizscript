import {useState} from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
	const [quizStatus, setQuizStatus] = useState(false);

	function startQuiz() {
		setQuizStatus(true);
	}

	return (
		<div className="App">	
			{
				!quizStatus && <Home startQuiz={startQuiz} />
			}
		</div>
	);
}

export default App;

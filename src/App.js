import logo from './logo.svg';
import './App.css';
import Question from './Question';

function App() {
  return (
    <div className="App">
      <h2>Welcome to Jeopardy!</h2>
      <h3>Score: #</h3>
      <button>Increase</button>
      <button>Decrease</button>
      <button>Reset</button>
      <h3>Let's Play!</h3>
      
      <Question />
    </div>
  );
}

export default App;

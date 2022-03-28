import logo from './logo.svg';
import ListForExercise from './components/ListForExercise';
import InputForm from './components/InputForm'
import Calendar from './Calendar';

import './App.css';

function App() {
  return (
    <div className="App">
      <InputForm />
      <ListForExercise />
      <Calendar />
    </div>
  );
}

export default App;

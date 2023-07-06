import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App container">
        <Form />
        <Todos />
    </div>
  );
}

export default App;

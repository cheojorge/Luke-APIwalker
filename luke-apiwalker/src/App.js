
import './App.css';
import { Router } from '@reach/router';
import { Form } from './Components/Form';

function App() {
  return (
    <div className="container mt-4">
      <Router>
        <Form path="/"/>
      </Router>
    </div>
  );
}

export default App;

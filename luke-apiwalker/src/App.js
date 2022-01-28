
import './App.css';
import { Router } from '@reach/router';
import { Form } from './Components/Form';
import { People } from './Components/People';
function App() {
  return (
    <div className="container mt-4">
      <Router>
        <Form path="/"/>
        <People path="/:id"/>
      </Router>
    </div>
  );
}

export default App;

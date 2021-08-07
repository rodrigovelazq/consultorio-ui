import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Dashboard/>
      </Router>
  );
}

export default App;

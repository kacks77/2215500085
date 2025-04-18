import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
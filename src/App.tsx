import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './styles/StyledComponents';
import Navigation from './components/Navigation';
import BMICalculator from './components/BMICalculator';
import BMIInfo from './components/BMIInfo';
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<BMICalculator />} />
          <Route path="/bmi-nedir" element={<BMIInfo />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";
import Counter from './components/Counter';
import Calculator from './components/Calculator';
import Timer from './components/Timer';
import PomodoroTimer from './components/PomodoroTimer';
import { ErrorPage } from "./ErrorPage";

import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>    
          <Route path="/" element={<Navbar />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/pomodorotimer" element={<PomodoroTimer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>     
    </>
  )
}

export default App;

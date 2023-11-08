import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <div>
      <h1>React simple apps</h1>
        <div className='link'><Link to="/counter"> 01. Counter</Link></div>
        <div className='link'><Link to="/calculator"> 02. Calculator</Link></div>
        <div className='link'><Link to="/timer"> 03. Timer</Link></div>
        <div className='link'><Link to="/pomodorotimer"> 04. Pomodoro Timer</Link></div>
        <div className='link'><Link to="/tictactoe"> 05. Tic Tac Toe</Link></div>
        <div className='link'><Link to="/todolist"> 06. To do list</Link></div>
    </div>
  )
}

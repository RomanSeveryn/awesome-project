import './App.css';
import UserCard from './components/user-card/UserCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserCard name='Name' surName='SurName' phrase='lucky man'/>
      </header>
    </div>
  );
}

export default App;

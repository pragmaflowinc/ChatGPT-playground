import logo from './logo.svg';
import './App.css';
import ChatGptRequest from './ChatGptRequest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChatGptRequest />
      </header>
    </div>
  );
}

export default App;

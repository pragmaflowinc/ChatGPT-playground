import logo from './logo.svg';
import './App.css';
import ChatGptRequest from './components/ChatGptRequest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <textInput />
        <ChatGptRequest />
      </header>
    </div>
  );
}

export default App;

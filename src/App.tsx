import logo from './logo.svg';
import './App.css';

interface AppProps {
  headerText: string;
}

function App({ headerText }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{headerText}</p>
      </header>
    </div>
  );
}

export default App;

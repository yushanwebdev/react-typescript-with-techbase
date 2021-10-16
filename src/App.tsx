import logo from './logo.svg';
import './App.css';

interface AppProps {
  headerText: string;
  extraText?: string;
}

function App({ headerText, extraText = 'default text' }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{headerText}</h1>
        <p>{extraText}</p>
      </header>
    </div>
  );
}

export default App;

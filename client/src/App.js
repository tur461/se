import logo from './logo.svg';
import SearchBox from './Components/SearchBox';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{"Search Diseases"}</h1>
      </header>
      <SearchBox />
    </div>
  );
}

export default App;

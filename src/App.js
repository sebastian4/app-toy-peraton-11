import logo from './logo.svg';
import './App.css';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Exercise for interview </p>
        <img src={logo} className="App-logo" alt="logo" />
        <Item/>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Weather from './Components/Weather-Card';
import Forecasted from './Components/Weekly-forecast';
import Bonus from './Components/Bonus-Info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <Weather></Weather>
        <Forecasted></Forecasted>
        <Bonus></Bonus>
        </>
      </header>
    </div>
  );
}

export default App;

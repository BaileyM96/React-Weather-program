import './App.css';
import Weather from './Components/Weather-Card';
import Forecasted from './Components/Weekly-forecast';
import Bonus from './Components/Bonus-Info';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <Weather></Weather>
        <Forecasted></Forecasted>
        <Bonus></Bonus>
        <Footer></Footer>
        </>
      </header>
    </div>
  );
}

export default App;

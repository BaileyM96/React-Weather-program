import Weather from '../Components/Weather-Card';
import Forecasted from '../Components/Weekly-forecast';
import Bonus from '../Components/Bonus-Info';
import Footer from '../Components/Footer';

export default function HomePage() {
    return (
        <>
        <Weather></Weather>
        <Forecasted></Forecasted>
        <Bonus></Bonus>
        <Footer></Footer>
        </>
    )
}
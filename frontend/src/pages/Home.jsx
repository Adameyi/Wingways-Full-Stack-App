import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopDestination from "../components/TopDestination";
import Bookingbar from "../components/Bookingbar";
import Deals from "../components/Deals";
import Values from "../components/Values";
import '../styles/index.css'; // If you have specific styles for the Home component
import Utilitybar from "../components/Utilitybar";

function Home() {
    return (
        <div>
            <Utilitybar />
            <Navbar />
            <Hero />
            <Bookingbar />
            <TopDestination />
            <Deals />
            <Values />
        </div>
    );
}

export default Home;
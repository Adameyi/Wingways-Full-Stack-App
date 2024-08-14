import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopDestination from "../components/TopDestination";
import Bookingbar from "../components/Bookingbar";
import Deals from "../components/Deals";
import Values from "../components/Values";
import Utilitybar from "../components/Utilitybar";

import '../styles/index.css';

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
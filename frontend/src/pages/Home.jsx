import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopDestinations from "../components/TopDestinations";
import Bookingbar from "../components/Bookingbar";
import Deals from "../components/Deals";
import Values from "../components/Values";
import Utilitybar from "../components/Utilitybar";

import '../styles/index.css';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Utilitybar />
            <Navbar />
            <Hero />
            <Bookingbar />
            <TopDestinations />
            <Deals />
            <Values />
            <Footer />
        </div>
    );
}

export default Home;
import Navbar from '../components/Navbar';
import '../styles/index.css'; // If you have specific styles for the Home component
import BookingBanner from "../components/BookingBanner"
import BookingSelection from "../components/BookingSelection"

function Home() {
    return (
        <div>
            <Navbar />
            <BookingBanner />
            <BookingSelection />
        </div>
    );
}

export default Home;
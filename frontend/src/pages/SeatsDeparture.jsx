import Navbar from '../components/Navbar';
import '../styles/index.css';
import BookingBanner from "../components/BookingBanner"
import ContinueNavbar from '../components/ContinueNavbar';


function SeatsDeparture() {
    const hideDropdowns = true;
    const hideReturning = true;

    return (
        <div>
            <Navbar />
            <BookingBanner hideDropdowns={hideDropdowns} hideReturning={hideReturning} />
            <ContinueNavbar />
        </div>
    );
}

export default SeatsDeparture
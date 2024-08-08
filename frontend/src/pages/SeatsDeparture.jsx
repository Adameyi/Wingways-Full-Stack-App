import Navbar from '../components/Navbar'
import '../styles/index.css'
import BookingBanner from "../components/BookingBanner"
import ContinueNavbar from '../components/ContinueNavbar'
import BookingSeats from '../components/BookingSeats'


function SeatsDeparture() {
    const hideDropdowns = true;
    const hideReturning = true;

    return (
        <div>
            <Navbar />
            <BookingBanner hideDropdowns={hideDropdowns} hideReturning={hideReturning} />
            <BookingSeats />
            <ContinueNavbar />
        </div>
    );
}

export default SeatsDeparture
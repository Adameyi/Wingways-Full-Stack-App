import Navbar from '../components/Navbar';
import ReceiptTickets from '../components/ReceiptTickets';
import '../styles/index.css'; // If you have specific styles for the Home component


function Receipt() {
    return (
        <div>
            <Navbar />
            <ReceiptTickets />
        </div>
    );
}

export default Receipt
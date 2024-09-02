import Navbar from '../components/Navbar';
import ReceiptColumn from '../components/ReceiptColumn';
import ReceiptTickets from '../components/ReceiptTickets';
import '../styles/index.css'; // If you have specific styles for the Home component


function Receipt() {
    return (
        <div>
            <Navbar />
            <ReceiptTickets />
            <div className='grid grid-cols-5 bg-gray-300 h-screen-min p-12'>
                <ReceiptColumn />
            </div>
        </div>
    );
}

export default Receipt
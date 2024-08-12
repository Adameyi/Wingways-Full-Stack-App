import Navbar from '../components/Navbar';
import PaymentColumn from '../components/PaymentColumn';
import ReceiptColumn from '../components/ReceiptColumn';
import ReceiptTickets from '../components/ReceiptTickets';
import '../styles/index.css'; // If you have specific styles for the Home component


function Payment() {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-5 bg-gray-300 h-screen-min'>
                <ReceiptColumn />
                <PaymentColumn />
            </div>
        </div>
    );
}

export default Payment
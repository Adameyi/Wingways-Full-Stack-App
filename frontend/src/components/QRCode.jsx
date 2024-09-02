import React from 'react';
import QRCode from 'qrcode.react';

function QRCode() {
    const qrValue = "https://www.example.com"; // Replace with your desired value

    return (
        <div className='flex justify-center items-center'
            style={{ width: '64px', height: '64px' }}>
            <QRCode
                value={qrValue}
                size={128}
                fgColor="#000000"
                bgColor="#ffffff"
                level="Q"
            />
        </div>
    );
}

export default QRCode;

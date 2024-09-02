import QRCode from 'qrcode.react';
import '../styles/index.css';

import React from 'react'

function Tickets({ type }) {
    const TicketData = {
        DepartureTicket: [
            {
                TicketID: 'WW0258-A',
                FullName: 'Jack E',
                DepartureTime: '08:30AM',
                ArrivalTime: '11:00AM',
                Gate: 'G21',
                Terminal: 'T9',
                Seat: '28A',
                CountryCodeDeparture: 'AU',
                CountryCodeArrival: 'AU',
                CityDeparture: 'Perth',
                CityArrival: 'Sydney',
                IATADeparture: 'SYD',
                IATAArrival: 'ADL',
                DepartureDate: '26/09/2024',
                RegisterDate: '01/09/2024'
            },
            {
                TicketID: 'WW0259-B',
                FullName: 'Jane D',
                DepartureTime: '09:45AM',
                ArrivalTime: '12:15PM',
                Gate: 'G14',
                Terminal: 'T7',
                Seat: '14C',
                CountryCodeDeparture: 'AU',
                CountryCodeArrival: 'AU',
                CityDeparture: 'Perth',
                CityArrival: 'Sydney',
                IATADeparture: 'SYD',
                IATAArrival: 'MEL',
                DepartureDate: '27/09/2024',
                RegisterDate: '02/09/2024'
            },
            {
                TicketID: 'WW0240-C',
                FullName: 'Chris F',
                DepartureTime: '10:20AM',
                ArrivalTime: '12:50PM',
                Gate: 'G22',
                Terminal: 'T5',
                Seat: '18B',
                CountryCodeDeparture: 'AU',
                CountryCodeArrival: 'AU',
                CityDeparture: 'Perth',
                CityArrival: 'Sydney',
                IATADeparture: 'SYD',
                IATAArrival: 'BNE',
                DepartureDate: '28/09/2024',
                RegisterDate: '03/09/2024'
            },
            {
                TicketID: 'WW0361-D',
                FullName: 'Alex G',
                DepartureTime: '11:30AM',
                ArrivalTime: '02:00PM',
                Gate: 'G30',
                Terminal: 'T6',
                Seat: '32D',
                CountryCodeDeparture: 'AU',
                CountryCodeArrival: 'AU',
                CityDeparture: 'Perth',
                CityArrival: 'Sydney',
                IATADeparture: 'SYD',
                IATAArrival: 'PER',
                DepartureDate: '29/09/2024',
                RegisterDate: '04/09/2024'
            },
        ],
        ArrivalTicket: [
            {
                TicketID: 'WW02458-A',
                FullName: 'Jack E',
                DepartureTime: '03:00PM',
                ArrivalTime: '05:30PM',
                Gate: 'G21',
                Terminal: 'T9',
                Seat: '28A',
                CountryCodeDeparture: 'AU',
                CountryCodeArrival: 'AU',
                CityDeparture: 'Perth',
                CityArrival: 'Sydney',
                IATADeparture: 'ADL',
                IATAArrival: 'SYD',
                DepartureDate: '30/09/2024',
                RegisterDate: '01/09/2024'
            },
            {
                TicketID: 'WW02459-B',
                FullName: 'Jane D',
                DepartureTime: '02:45PM',
                ArrivalTime: '05:15PM',
                Gate: 'G14',
                Terminal: 'T7',
                Seat: '14C',
                CountryCodeDeparture: 'AU',
                CountryCodeArrival: 'AU',
                CityDeparture: 'Melbourne',
                CityArrival: 'Sydney',
                IATADeparture: 'MEL',
                IATAArrival: 'SYD',
                DepartureDate: '01/10/2024',
                RegisterDate: '02/09/2024'
            },
            {
                TicketID: 'WW02460-C',
                FullName: 'Chris F',
                DepartureTime: '01:20PM',
                ArrivalTime: '03:50PM',
                Gate: 'G22',
                Terminal: 'T5',
                Seat: '18B',
                CountryCodeDeparture: 'AU',
                CountryCodeArrival: 'AU',
                CityDeparture: 'Brisbane',
                CityArrival: 'Sydney',
                IATADeparture: 'BNE',
                IATAArrival: 'SYD',
                DepartureDate: '02/10/2024',
                RegisterDate: '03/09/2024'
            },
            {
                TicketID: 'WW02461-D',
                FullName: 'Alex G',
                DepartureTime: '12:00PM',
                ArrivalTime: '02:30PM',
                Gate: 'G30',
                Terminal: 'T6',
                Seat: '32D',
                CountryCodeDeparture: 'AU',
                CountryCodeArrival: 'AU',
                CityDeparture: 'Perth',
                CityArrival: 'Sydney',
                IATADeparture: 'PER',
                IATAArrival: 'SYD',
                DepartureDate: '03/10/2024',
                RegisterDate: '04/09/2024'
            }
        ],
    }

    //Select the data based on type prop.
    const tickets = TicketData[type] || [];

    return (
        < div className='grid grid-cols-4 gap-4 p-4 w-full' >
            {tickets.map((ticket, index) => (
                <div key={index} className='col-span-1 bg-white p-3'>
                    <div className='grid grid-cols-6 p-4 w-full'>
                        <div className='col-span-3 roboto-mono'>
                            <p>TicketNo.</p>
                            <p className='roboto-medium text-[1.5rem]'>{ticket.TicketID}</p>
                            <p className='mt-4'>Departure</p>
                            <p className='roboto-medium text-[1.5rem]'>{ticket.DepartureTime}</p>
                        </div>
                        <div className='col-span-3 roboto-mono text-right'>
                            <p>Full Name</p>
                            <p className='roboto-medium text-[1.5rem]'>{ticket.FullName}</p>
                            <p className='mt-4'>Arrival</p>
                            <p className='roboto-medium text-[1.5rem]'>{ticket.DepartureTime}</p>
                        </div>
                        <div className='col-span-2 roboto-mono mt-4'>
                            <p>Gate</p>
                            <p className='roboto-medium text-[1.5rem]'>{ticket.Gate}</p>
                        </div>
                        <div className='col-span-2 roboto-mono mt-4 text-center'>
                            <p>Terminal</p>
                            <p className='roboto-medium text-[1.5rem]'>{ticket.Terminal}</p>
                        </div>
                        <div className='col-span-2 roboto-mono mt-4 text-right'>
                            <p>Seat</p>
                            <p className='roboto-medium text-[1.5rem]'>{ticket.Seat}</p>
                        </div>
                        <div className='col-span-2 roboto-mono mt-4'>
                            <p className='roboto-medium text-[3rem]'>{ticket.IATADeparture}</p>
                            <p className='leading-[0.1rem]'>{ticket.CityDeparture},{ticket.CountryCodeDeparture}</p>
                        </div>
                        <div className='col-span-2 roboto-mono mt-4 text-center flex items-center justify-center'>
                            <p className='roboto-medium text-[1.5rem]'>_______</p>
                        </div>
                        <div className='col-span-2 roboto-mono mt-4 text-right'>
                            <p className='roboto-medium text-[3rem]'>{ticket.IATAArrival}</p>
                            <p className='leading-[0.1rem]'>{ticket.CityArrival},{ticket.CountryCodeArrival}</p>
                        </div>
                    </div>
                    {/* Divider Start */}
                    <div className='flex items-center justify-between'>
                        <div className='bg-gray-300 h-16 w-16 rounded-full ml-[-2.5rem]' />
                        <span className=''>-----------------------------------------</span>
                        <div className='bg-gray-300 h-16 w-16 rounded-full mr-[-2.5rem]' />
                    </div>
                    {/* Divider End */}
                    <div>
                        <div className='grid grid-cols-2 p-3'>
                            <div className='col-span-1 roboto-mono'>
                                <p>Reg. Date</p>
                                <p className='roboto-medium text-[1.5rem]'>{ticket.RegisterDate}</p>
                                <p>Flight Date</p>
                                <p className='roboto-medium text-[1.5rem]'>{ticket.DepartureDate}</p>
                            </div>
                            <div className='col-span-1 roboto-mono'>
                                <p>Scan at Gate</p>
                                <QRCode />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default Tickets
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const MonthlyLineChart = () => {
    // Example data with drops
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dataValues = [50000, 55000, 60000, 65000, 70000, 65000, 62000, 60000, 88000, 107000, 136000, 121096];

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Points',
                data: dataValues,
                borderColor: '#454545',
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                fill: true,
                tension: 0.1, // Smooths the line
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `Points: ${context.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month(s)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Points'
                }
            }
        }
    };

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-[2rem]'>Total Points Overview</h2>
                <Dropdown header="2024">
                    <DropdownItem>2020</DropdownItem>
                    <DropdownItem>2021</DropdownItem>
                    <DropdownItem>2022</DropdownItem>
                    <DropdownItem>2023</DropdownItem>
                </Dropdown>
            </div>
            <Line data={data} options={options} />
        </div>
    );
}

export default MonthlyLineChart;

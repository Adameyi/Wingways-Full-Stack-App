import React from 'react';

function CircleChart({ percentage }) {
    const strokeWidth = 10;
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className='flex items-center justify-center'>
            <svg
                className='w-32 h-32'
                width='200'
                height='200'
                viewBox='0 0 200 200'
                xmlns='http://www.w3.org/2000/svg'
            >
                <circle
                    className='text-gray-200'
                    stroke='currentColor'
                    strokeWidth={strokeWidth}
                    fill='none'
                    r={radius}
                    cx='100'
                    cy='100'
                />
                <circle
                    className='text-blue-500'
                    stroke='currentColor'
                    strokeWidth={strokeWidth}
                    fill='none'
                    r={radius}
                    cx='100'
                    cy='100'
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap='round'
                    transform='rotate(-90 100 100)'
                />
                <text
                    x='50%'
                    y='50%'
                    className='text-xl font-bold text-blue-500'
                    dominantBaseline='middle'
                    textAnchor='middle'
                >
                    {percentage}%
                </text>
            </svg>
        </div>
    );
}

export default CircleChart;

import React from 'react';
import { Bar } from "react-chartjs-2";

export default function Quantity() {
    const dataQuantity = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
            {
                label: 'Successful',
                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                backgroundColor: '#1AE2CA',
            },
            {
                label: 'Failure',
                data: [2, 3, 20, 5, 1, 4, 12, 19, 3, 5, 2, 3],
                backgroundColor: '#FF8396',
            }
        ],
    };

    const optionsQuantity = {
        maintainAspectRatio: false,
        scales: {
            y: {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    color: '#FFFFFF'
                },
                grid: {
                    color: 'rgba(224,224,224,0.2)',
                    borderColor: '#D0C9D6'
                }
            },
            x: {
                stacked: true,
                ticks: {
                    color: '#FFFFFF'
                },
                grid: {
                    display: false,
                    borderColor: '#D0C9D6'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "#FFFFFF"
                }
            }
        }
    };

    return (
        <div className="quantity element">
        <p>Quantity</p>
        <div className="chart">
            <Bar data={dataQuantity} options={optionsQuantity} />
        </div>
    </div>
    )
}


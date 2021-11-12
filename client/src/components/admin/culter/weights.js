import React from 'react'
import { useSelector } from 'react-redux'
import { Pie } from "react-chartjs-2"


export default function Weights() {
    const auth = useSelector(state => state.auth)
    const tank = [300, 275];
    const dataWeights = {
        labels: [`Tank 1: ${tank[0]} l`, `Tank 2: ${tank[1]} l`],
        datasets: [{
            backgroundColor: ["#1AE2CA", "#FF8396"],
            data: tank,
            borderWidth: 0.1,
            hoverBorderWidth: 2,
            hoverBorderColor: '#fff',
        }]
    }
    const optionsWeights = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                titleColor: "#fff",
                bodyColor: "#fff"
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    font: {
                        size: 15
                    },
                    color: "white"
                }
            }
        }
    }

    return (
        <div className="weights element">
        <p>Weights</p>
        <div className="chart">
            <Pie
                data={dataWeights}
                options={optionsWeights}
            />
        </div>
    </div>
    )
}


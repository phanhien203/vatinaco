import React from 'react'
import { useSelector } from 'react-redux'
import { Bar } from "react-chartjs-2";

export default function TargetFuture(props) {
    const dataTagetFuture = {
        labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
        datasets: [
            {
                backgroundColor: "#1AE2CA",
                data: [12, 19, 30, 50, 20, 30, 100, 30, 50, 60, 20, 10],
                borderWidth: 0,
                // borderColor: "#77c4fff5",
                barPercentage: 0.6,

            }
        ]
    };
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                titleColor: "#fff",
                bodyColor: "#fff"
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                max: 100,
                min: 0,
                ticks: {
                    stepSize: 20,
                    color: "white"
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.2)"
                }
            },
            x: {
                //  display: false
                ticks: {
                    color: "white"
                },
                grid: {
                    display: false
                }
            }
        }
    }
    return (
        <div className="target_future element">
            <p>Target future</p>
            <div className="chart">
                <Bar
                    data={dataTagetFuture}
                    options={options}
                />
            </div>
        </div>
    )
}


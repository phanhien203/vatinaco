import React from 'react'
import { useSelector } from 'react-redux'
import { Bar } from "react-chartjs-2"


export default function Parameters() {
    const auth = useSelector(state => state.auth)
    const temp = [31, 30]
    const dataTemp = {
        labels: ["50"],
        datasets: [
            {
                label: "Temp 1",
                backgroundColor: "#FF8396",
                data: [temp[0]]
            }, {
                label: "Temp 2",
                backgroundColor: "#1AE2CA",
                data: [temp[1]]
            }
        ]
    }
    const optionsTemp = {
        maintainAspectRatio: false,
        scales:
        {
            y: {
                type: 'linear',
                grace: '100%',
                display: false,
                offset: true,
                max: 40,
                min: 0,
                ticks: {
                    stepSize: 1
                }
            },

            x: {
                type: 'linear',
                grace: '100%',
                display: false,
                offset: true
            },
        },

        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'Temperature',
                color: "white",
                position: "bottom",
                font: {
                    size: 14
                }
            },
        }
    }
    const concentration = [95, 78]
    const dataCon = {
        labels: ["50"],
        datasets: [
            {
                label: "Con 1",
                backgroundColor: "#FF8396",
                data: [concentration[0]]
            }, {
                label: "Con 2",
                backgroundColor: "#1AE2CA",
                data: [concentration[1]]
            }
        ]
    }
    const optionsCon = {
        maintainAspectRatio: false,
        scales:
        {
            y: {
                type: 'linear',
                grace: '100%',
                display: false,
                offset: true,
                max: 100,
                min: 0,
                ticks: {
                    stepSize: 1
                }
            },

            x: {
                type: 'linear',
                grace: '50%',
                display: false,
                offset: true
            },
        },

        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'Concentration',
                color: "white",
                position: "bottom",
                font: {
                    size: 14
                }
            },
        }
    }
    const weights = [300, 450]
    const dataWeight = {
        labels: ["50"],
        datasets: [
            {
                label: "Weight 1",
                backgroundColor: "#FF8396",
                data: [weights[0]]
            }, {
                label: "Weight 2",
                backgroundColor: "#1AE2CA",
                data: [weights[1]]
            }
        ]
    }
    const optionsWeight = {
        maintainAspectRatio: false,
        scales:
        {
            y: {
                type: 'linear',
                grace: '100%',
                display: false,
                offset: true,
                max: 500,
                min: 0,
                ticks: {
                    stepSize: 10
                }
            },

            x: {
                type: 'linear',
                grace: '50%',
                display: false,
                offset: true
            },
        },

        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'Weights',
                color: "white",
                position: "bottom",
                font: {
                    size: 14
                }
            },
        }
    }
    return (
        <div className="parameters element">
        <p>Parameters</p>
        <div className="chart">
            <div>
                <Bar
                    data={dataTemp}
                    options={optionsTemp}
                />
            </div>
            <div>
                <Bar
                    data={dataCon}
                    options={optionsCon}
                />
            </div>

            <div>
                <Bar
                    data={dataWeight}
                    options={optionsWeight}
                />
            </div>

        </div>
    </div>
    )
}


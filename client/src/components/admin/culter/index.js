import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2"
import axios from 'axios'



import './culter_page.scss'


export default function CulterPage() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="culter_page">
            <h3>culter area</h3>
            <div className="data">
                <div className="weights element">
                    <p>Weights</p>
                    <div className="chart">
                        {/* <Doughnut
                            className="doughnut"

                            data={{
                                labels: [
                                    "Africa",
                                    "Asia",
                                    "Europe",
                                    "Latin America",
                                    "North America"
                                ],
                                datasets: [
                                    {
                                        label: "Population (millions)",
                                        backgroundColor: [
                                            "#3e95cd",
                                            "#8e5ea2",
                                            "#3cba9f",
                                            "#e8c3b9",
                                            "#c45850"
                                        ],
                                        lineWidth: 1,
                                        data: [2478, 5267, 734, 784, 433],
                                        borderColor: "",
                                        borderWidth: 0
                                    }
                                ]

                            }}
                            option={{
                                title: {
                                    display: true,
                                    text: "Predicted world population (millions) in 2050"
                                }
                            }}
                        /> */}
                        <Pie
                            data={{
                                labels: ["Tank 1", "Tank 2"],
                                datasets: [{
                                    label: "Population (millions)",
                                    backgroundColor: ["#1AE2CA", "#FF8396"],
                                    data: [2478, 5267]
                                }]
                            }}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Predicted world population (millions) in 2050'
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="parameters element">
                    <p>Parameters</p>
                    <div className="chart">
                        <Bar
                            data={{
                                labels: ["1900"],
                                datasets: [
                                    {
                                        label: "Africa",
                                        backgroundColor: "#3e95cd",
                                        data: [133]
                                    }, {
                                        label: "Europe",
                                        backgroundColor: "#8e5ea2",
                                        data: [408]
                                    }
                                ]
                            }}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Population growth (millions)'
                                },
                                scales:
                                {
                                    y: {
                                        type: 'linear',
                                        grace: '100%',
                                        display: false
                                    },

                                    x: {
                                        type: 'linear',
                                        grace: '100%',
                                        display: false
                                    },
                                },

                                plugins: {
                                    legend: false
                                }

                            }}
                            style={{
                                color: '#fff'
                            }}
                        />
                        <Bar
                            data={{
                                labels: ["1900"],
                                datasets: [
                                    {
                                        label: "Africa",
                                        backgroundColor: "#3e95cd",
                                        data: [133]
                                    }, {
                                        label: "Europe",
                                        backgroundColor: "#8e5ea2",
                                        data: [408]
                                    }
                                ]
                            }}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Population growth (millions)'
                                },
                                scales:
                                {
                                    y: {
                                        type: 'linear',
                                        grace: '100%',
                                        display: false
                                    },

                                    x: {
                                        type: 'linear',
                                        grace: '100%',
                                        display: false
                                    },
                                },

                                plugins: {
                                    legend: false
                                }

                            }}
                            style={{
                                color: '#fff'
                            }}
                        />

                        <Bar
                            data={{
                                labels: ["1900"],
                                datasets: [
                                    {
                                        label: "Africa",
                                        backgroundColor: "#3e95cd",
                                        data: [133]
                                    }, {
                                        label: "Europe",
                                        backgroundColor: "#8e5ea2",
                                        data: [408]
                                    }
                                ]
                            }}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Population growth (millions)'
                                },
                                scales:
                                {
                                    y: {
                                        type: 'linear',
                                        grace: '50%',
                                        display: false
                                    },

                                    x: {
                                        type: 'linear',
                                        grace: '10%',
                                        display: false
                                    },
                                },

                                plugins: {
                                    legend: false
                                }

                            }}
                            style={{
                                color: '#fff'
                            }}
                        />
                    </div>
                </div>
                <div className="quantity element">
                    <p>Quantity</p>
                    <div className="chart">
                        <Line
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                                datasets: [
                                    {
                                        label: "First dataset",
                                        data: [33, 53, 85, 41, 44, 65],
                                        fill: true,
                                        backgroundColor: "rgba(75,192,192,0.2)",
                                        borderColor: "rgba(75,192,192,1)"
                                    },
                                    {
                                        label: "Second dataset",
                                        data: [33, 25, 35, 51, 54, 76],
                                        fill: true,
                                        backgroundColor: "#a9585870",
                                        borderColor: "#d55959ab"
                                    }
                                ]
                            }}
                            options={{

                            }}
                        />
                    </div>
                </div>
                <div className="Quality element">
                    <p>Quality</p>
                    <div className="chart">

                    </div>
                </div>
                <div className="history_production element">
                    <p>History production</p>
                    <div className="chart">

                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { Doughnut } from "react-chartjs-2"

export default function PowerConsumption(props) {
    const data = (canvas) => {
        const ctx = canvas.getContext("2d")
        var gradient1 = ctx.createLinearGradient(10, 20, 0, 100);
        gradient1.addColorStop(0, '#183351');
        gradient1.addColorStop(1, '#0C2842');
        var gradient2 = ctx.createLinearGradient(0, 0, 0, 80);
        gradient2.addColorStop(0, '#00B746');
        gradient2.addColorStop(1, '#00B746');
        return {
            datasets: [
                {
                    label: "60",
                    data: [2478, 5267],
                    lineWidth: 1,
                    backgroundColor: [gradient1, gradient2],
                    borderWidth: 0.1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#fff',
                    cutout: "60%"
                }
            ]

        }
    }
    return (
        <div className="power_consumption element">
        <p>Power consumption</p>
        <div className="chart">
        <Doughnut
                            id="doughnut"

                            data={data}
                            option={{
                                maintainAspectRatio: true,
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        color: "#fff",
                                        text: "Tank 1",
                                        position: "center"
                                    },
                                    tooltip: {
                                        enabled: true,
                                        titleColor: "#fff",
                                        bodyColor: "#fff"
                                    },
                                    legend: {
                                        display: true,
                                        labels: {        
                                            font: {
                                                size: 14
                                            }
                                        }
                                    }
                                },
                                scales: {
                                    r: {
                                        max: 100,
                                        min: 0,
                                        ticks: {
                                            stepSize: 20,
                                            backdropColor: "rgba(255, 255, 255, 0)",
                                            color: "white",
                                            backdropPadding: 7,
                                            padding: 13,
                                            z: 2,
                                            textStrokeColor: "blue",
                                            font :{
                                                size: 20
                                            }
                                        },
                                        labels: "abc",
                                        title: {
                                            display: true,
                                            text: "vsdvs"
                                        }
                                    }
                                }
                            }}
                        />
        </div>
    </div>
    )
}


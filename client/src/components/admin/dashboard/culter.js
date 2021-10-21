import React from 'react'
import { Link } from 'react-router-dom'
import { Doughnut, Bar, Line } from "react-chartjs-2"
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Culter() {
    const auth = useSelector(state => state.auth)
    const data = (canvas) => {
        const ctx = canvas.getContext("2d")
        var gradient1 = ctx.createLinearGradient(10, 20, 0, 100);
        gradient1.addColorStop(0, '#86d5fa');
        gradient1.addColorStop(1, '#59CBFF');
        var gradient2 = ctx.createLinearGradient(0, 0, 0, 80);
        gradient2.addColorStop(0, 'white');
        gradient2.addColorStop(1, '#FF647C');
        return {
            datasets: [
                {
                    label: "Population (millions)",
                    lineWidth: 1,
                    data: [2478, 5267],
                    backgroundColor: [gradient1, gradient2],
                    borderWidth: 0.1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#fff'
                }
            ]

        }
    }
    const data2 = (canvas) => {
        const ctx = canvas.getContext("2d")
        var gradient1 = ctx.createLinearGradient(10, 20, 0, 100);
        gradient1.addColorStop(0, '#86d5fa');
        gradient1.addColorStop(1, '#59CBFF');
        var gradient2 = ctx.createLinearGradient(0, 0, 0, 80);
        gradient2.addColorStop(0, 'white');
        gradient2.addColorStop(1, '#FF647C');
        return {
            datasets: [
                {
                    label: "Population (millions)",
                    lineWidth: 1,
                    data: [3000, 5267],
                    backgroundColor: [gradient1, gradient2],
                    borderWidth: 0.1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#fff'
                }
            ]

        }
    }

    return (
        <div className="col_left it culter">
            <p>Culter</p>
            <div className="chart">
                <div className="wrap_chart">
                    <div className="percent">
                        <Doughnut
                            id="doughnut"

                            data={data}
                            option={{
                                title: {
                                    display: true,
                                    text: "Predicted world population (millions) in 2050"
                                }
                            }}
                        />

                        <p>67%</p>
                    </div>

                    <div>Tank 1</div>
                </div>
                <div className="wrap_chart">
                    <div className="percent">
                        <Doughnut
                            id="doughnut2"

                            data={data2}
                            option={{
                                title: {
                                    display: true,
                                    text: "Predicted world population (millions) in 2050"
                                }
                            }}
                        />
                        <p>43%</p>
                    </div>
                    <div>Tank 2</div>
                </div>

            </div>

        </div>
    )
}




import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Radar } from "react-chartjs-2"
import axios from 'axios'


export default function Energy() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_left it energy">
            <p>Energy</p>
            <div className="chart">

                <Radar
                    data={{
                        labels: [
                            'Eating',
                            'Drinking',
                            'Sleeping',
                            'Designing',
                            'Coding',
                            'Cycling',
                            'Running'
                        ],
                        datasets: [{
                            data: [60, 50, 90, 80, 50, 50, 40],
                            fill: true,
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            borderColor: 'rgb(255, 99, 132)',
                            pointBackgroundColor: 'rgb(255, 99, 132)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 99, 132)'
                        }]
                    }}
                    options={ {
                        plugins: {
                            legend: {
                              display: false,
                              font: {
                                size: 24
                            }
                            }
                          }
                    }}
                />
            </div>
        </div>
    )
}


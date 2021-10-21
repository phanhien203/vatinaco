import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'


export default function Schedule() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_right it schedule">
            <p>Schedule</p>
            <div className="chart">
                <Bar
                    data={{
                        labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
                        datasets: [
                            {
                                label: "Africa",
                                backgroundColor: "#3e95cd",
                                data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
                                borderRadius: 10,
                                borderSkipped: false,
                                borderWidth:2
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
                        //     y: {
                        //         grace: '100%',
                        //         display: false
                        //     },

                            x: {
                                grace: '90%'
                                // display: false
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
    )
}


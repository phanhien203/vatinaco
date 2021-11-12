import React from 'react'
import { useSelector } from 'react-redux'
import ReactApexChart from 'react-apexcharts';

export default function UserSpace(props) {
    const chart = {
        series: [75],
        options: {
            chart: {
                height: 350,
                type: 'radialBar'
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: '#fff',
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#888',
                            fontSize: '17px'
                        },
                        value: {
                            formatter: function (val) {
                                return `${parseInt(val)} %`;
                            },
                            color: '#111',
                            fontSize: '25px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#ABE5A1'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['User'],
        },
    };
    return (
        <div className="user_space element">
            <p>User space</p>
            <div className="chart">
                <div>
                    <ReactApexChart options={chart.options} series={chart.series} type="radialBar" width='100%' />
                    <h4>Deep fridge 1</h4>
                </div>
                <div>
                    <ReactApexChart options={chart.options} series={chart.series} type="radialBar" width='100%' />
                    <h4>Deep fridge 2</h4>
                </div>
            </div>
        </div>
    )
}


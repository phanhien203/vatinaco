import React from 'react'
import { useSelector } from 'react-redux'
import ReactApexChart from 'react-apexcharts';


export default function Total(props) {
    const chart = {
          
        series: [67],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
            offsetY: -10
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                name: {
                  fontSize: '16px',
                  color: '#fff',
                  offsetY: 120
                },
                value: {
                  offsetY: 76,
                  fontSize: '22px',
                  color: '#fff',
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
          },
          stroke: {
            dashArray: 4
          },
          labels: ['Bottles'],
        },
      
      
      };

    return (
        <div className="total element">
            <p>Total</p>
            <div className="chart" id="chart">
            <div id="chart">
            <ReactApexChart options={chart.options} series={chart.series} type="radialBar" height={300}/></div>

            </div>
        </div>
    )
}


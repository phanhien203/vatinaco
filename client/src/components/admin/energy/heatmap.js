import React from 'react'
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';

export default function Heatmap() {
    const auth = useSelector(state => state.auth)

    const chart = {
          
        series: [{
            name: 'Jan',
            data: [1, 5, 20]
          },
          {
            name: 'Feb',
            data: [8, 15, 20]
          },
          {
            name: 'Mar',
            data: [12, 14, 19]
          },
          {
            name: 'Apr',
            data: [1, 5, 20]
          },
          {
            name: 'May',
            data: [13, 18, 20]
          },
          {
            name: 'Jun',
            data: [1, 5, 20]
          },
          {
            name: 'Jul',
            data: [1, 5, 20]
          },
          {
            name: 'Aug',
            data: [1, 5, 20]
          },
          {
            name: 'Sep',
            data: [1, 5, 20]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'heatmap',
          },
          plotOptions: {
            heatmap: {
              shadeIntensity: 0.5,
              radius: 0,
              useFillColorAsStroke: true,
              colorScale: {
                ranges: [{
                    from: -30,
                    to: 5,
                    name: 'low',
                    color: '#00A100'
                  },
                  {
                    from: 6,
                    to: 20,
                    name: 'medium',
                    color: '#128FD9'
                  },
                  {
                    from: 21,
                    to: 45,
                    name: 'high',
                    color: '#FFB200'
                  },
                  {
                    from: 46,
                    to: 55,
                    name: 'extreme',
                    color: '#FF0000'
                  }
                ]
              }
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1
          },
          title: {
            text: 'HeatMap Chart with Color Range'
          },
        },
      
      
      };
    return (
        <div className="heatmap element">
            <p>Heatmap</p>
            <div className="chart">
            <ReactApexChart options={chart.options} series={chart.series} type="heatmap" height='100%' />
    
            </div>
        </div>
    )
}


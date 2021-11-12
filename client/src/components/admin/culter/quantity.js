import React from 'react'
import { useSelector } from 'react-redux'
import { Line } from "react-chartjs-2"


export default function Quantity() {
    const auth = useSelector(state => state.auth)

    return (
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
                            borderColor: "rgba(75,192,192,1)",
                            tension: 0.3
                        },
                        {
                            label: "Second dataset",
                            data: [33, 25, 35, 51, 54, 76],
                            fill: true,
                            backgroundColor: "#a9585870",
                            borderColor: "#d55959ab",
                            tension: 0.3
                        }
                    ]
                }}
                options={{
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                }}
            />
        </div>
    </div>
    )
}


import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Culter() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_left it culter">
            <p>Culter</p>
            <div className="chart">
                <div className="wrap_chart">
                    <div className="percent">
                        <img src='/chart1.svg' />
                        <p>67%</p>
                    </div>

                    <div>Tank 1</div>
                </div>
                <div className="wrap_chart">
                    <div className="percent">
                        <img src='/chart2.svg' />
                        <p>43%</p>
                    </div>
                    <div>Tank 2</div>
                </div>

            </div>

        </div>
    )
}


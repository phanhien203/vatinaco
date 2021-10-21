import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'



import './packing_page.scss'


export default function PackingPage() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="packing_page">
            <h3>packing area</h3>
            <div className="data">
                <div className="row_1">
                    <div className="mixer element">
                        <p>Mixer</p>
                        <div className="chart">

                        </div>
                    </div>
                    <div className="oee_realtime element">
                        <p>OEE realtime</p>
                        <div className="chart">

                        </div>
                    </div>
                    <div className="oee_history element">
                        <p>OEE history</p>
                        <div className="chart">

                        </div>
                    </div>
                </div>
                <div className="row_2">
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
        </div>
    )
}

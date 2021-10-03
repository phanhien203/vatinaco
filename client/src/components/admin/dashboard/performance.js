import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Performance() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_right it performance">
            <p>Performance</p>
            <div className="chart">
                <img src='/chart3.svg' />
            </div>
            <div className="type">
                <div><div style={{background:'#FF8396'}}></div>Now</div>
                <div><div style={{background:'#42CAEB'}}></div>Perious</div>
                <div><div style={{background:'#1AE2CA'}}></div>Expected</div>
            </div>
        </div>
    )
}


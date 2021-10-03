import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Schedule() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_right it schedule">
            <p>Schedule</p>
            <div className="chart">
            <img src='/chart6.svg'/>
            </div>
        </div>
    )
}


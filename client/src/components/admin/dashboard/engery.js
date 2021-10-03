import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Engery() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_left it engery">
            <p>Engery</p>
            <div className="chart">
                <img src='/chart5.svg' />
            </div>
        </div>
    )
}


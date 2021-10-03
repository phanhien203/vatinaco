import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Storage() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_right it storage">
           <p>Storage</p> 
           <div className="chart">
           <img src='/chart7.svg'/>
           </div>
        </div>
    )
}


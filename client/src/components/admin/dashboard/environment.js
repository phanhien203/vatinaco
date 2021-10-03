import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Environment() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_left it">
          <p>Environment</p>  
        </div>
    )
}


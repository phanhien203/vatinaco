import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import './culter_page.scss'
import Weights from './weights'
import Production from './production'
import Quality from './quality'
import Parameters from './parameters'
import Quantity from './quantity'

import socketIOClient from "socket.io-client";
const host = "http://localhost:5000";

export default function CulterPage() {
    const auth = useSelector(state => state.auth)

    const [data, setData] = useState({
        weightCulture1: 0,
        tempCulture1: 0,
        timeProcessOut1: 0,
        concentration1: 0,
        weightCulture2: 0,
        tempCulture2: 0,
        timeProcessOut2: 0,
        concentration2: 0
    })

    const socketRef = useRef()
    useEffect(() => {
        socketRef.current = socketIOClient.connect(host)
        socketRef.current.on('sendDataServer', data => {
            const dataWrap = {
                weightCulture1: data.weightCulture1.toFixed(2),
                tempCulture1: data.tempCulture1.toFixed(2),
                timeProcessOut1: data.timeProcessOut1.toFixed(2),
                concentration1: data.concentration1.toFixed(2),
                weightCulture2: data.weightCulture2.toFixed(2),
                tempCulture2: data.tempCulture2.toFixed(2),
                timeProcessOut2: data.timeProcessOut2.toFixed(2),
                concentration2: data.concentration2.toFixed(2)
            }
            setData(dataWrap);
            console.log(dataWrap)
        })
        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    return (
        <div className="culter_page">
            <h3>culter area</h3>
            <div className="data">
                <Weights />
                <Parameters />
                <Quantity/>
                <Quality />
                <Production />
            </div>
        </div>
    )
}

import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2"
import Mixer from "./mixer"
import History from "./oeehistory";
import OeeRealtime from './oeeRealtime';
import Production from './production';
import Quantity from './quantity';

import './packing_page.scss'

import socketIOClient from "socket.io-client";
const host = "http://localhost:5000";

export default function PackingPage() {
    const auth = useSelector(state => state.auth)

    const [data, setData] = useState({
        weightMixer: 0,
        tempMixer: 0,
        timeProcessMixer: 0,
        OEE: 0,
        Availability: 0,
        Performance: 0,
        Quality: 0,
    })

    const socketRef = useRef()
    useEffect(() => {
        socketRef.current = socketIOClient.connect(host)
        socketRef.current.on('sendDataServer', data => {
            const dataWrap = {
                weightMixer: data.weightMixer.toFixed(2),
                tempMixer: data.tempMixer.toFixed(2),
                timeProcessMixer: data.timeProcessMixer.toFixed(2),
                OEE: data.OEE.toFixed(2),
                Availability: data.Availability.toFixed(2),
                Performance: data.Performance.toFixed(2),
                Quality: data.Quality.toFixed(2),
            }
            setData(dataWrap);
        })
        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    return (
        <div className="packing_page">
            <h3>packing area</h3>
            <div className="data">
                <div className="row_1">
                    <Mixer timeProcessMixer={data.timeProcessMixer} />
                    <OeeRealtime />
                    <History />
                </div>
                <div className="row_2">
                    <Quantity />
                    <Production />

                </div>


            </div>
        </div>
    )
}

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import TargetPresent from './target_present';
import TargetFuture from './target_future';
import ImportMaterial from './import_material';
import Planning from './planning';
import './planning_page.scss'

import socketIOClient from "socket.io-client";
const host = "http://localhost:5000";

export default function PlanningPage() {
    // const auth = useSelector(state => state.auth)

    // const [data, setData] = useState({ mixer: 0 })

    // const socketRef = useRef()
    // useEffect(() => {
    //     socketRef.current = socketIOClient.connect(host)
    //     socketRef.current.on('sendDataServer', data => {
    //         setData({ mixer: data.tempCulture1.toFixed(2) });
    //         console.log(data)
    //     })
    //     return () => {
    //         socketRef.current.disconnect();
    //     };
    // }, []);

    return (
        <div className="planning_page">
            <h3>production planning</h3>
            <div className="data">
                <TargetPresent />
                <TargetFuture />
                <ImportMaterial />
                <Planning />
            </div>
        </div>
    )
}

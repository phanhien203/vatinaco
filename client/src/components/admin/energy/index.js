import React, { useState, useEffect, useRef } from 'react';

import PowerConsumption from './power_consumption';
import Allotment from './allotment';
import Environmental from './environmental';
import Heatmap from './heatmap';
import './energy_page.scss'


export default function EnergyPage() {


    return (
        <div className="energy_page">
            <h3>Energy and environment</h3>
            <div className="data">
                <PowerConsumption />
                <Allotment />
                <Environmental />
                <Heatmap />
            </div>
        </div>
    )
}

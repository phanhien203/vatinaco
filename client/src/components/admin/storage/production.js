import React from 'react'
import { useSelector } from 'react-redux'

export default function Production() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="production element">
            <p>History production</p>
            <div className="chart">
                <table>
                    <thead>
                        <div>
                            <tr>
                                <th className="data_time">Time</th>
                                <th className="data_status">Status</th>
                                <th className="data_quantity">Quantity</th>
                                <th className="data_area">Area</th>
                                <th className="data_code">Code</th>
                            </tr>
                        </div>
                    </thead>
                    <tbody>
                        <div>
                            <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>
                            <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>                        <tr>
                                <th className="data_time">2020-05-06 12:50:01</th>
                                <th className="data_status">Import</th>
                                <th className="data_quantity">4200</th>
                                <th className="data_area">Deep fridge 1</th>
                                <th className="data_code">12341235214</th>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


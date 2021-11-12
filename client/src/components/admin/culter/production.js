import React from 'react'
import { useSelector } from 'react-redux'

export default function Production() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="history_production element">
            <p>History production</p>
            <div className="chart">
                <table>
                    <thead>
                        <div>
                            <tr>
                                <th className="data_time">Time</th>
                                <th className="dta_tank">Tank</th>
                                <th className="data_quantity">Quantity</th>
                                <th className="data_quality">Quality</th>
                                <th className="data_code">Code</th>
                            </tr>
                        </div>
                    </thead>
                    <tbody>
                        <div>
                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>
                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>
                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>                            <tr>                                
                                <td className="data_time">2020-05-06 12:50:01</td>
                                <td className="data_tank">1</td>
                                <td className="data_quantity">2000</td>
                                <td className="data_quality">Successful</td>
                                <td className="data_code">12341235213</td>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


import React from 'react';
import dataset from '../data';

const Statistics = () => {
    return (
        <div className='stats-container'>
            <p>Average Stats by Hour</p>
            <table>
                <colgroup span='4'></colgroup>
                <tbody>
                    <tr>
                        <th>Hour</th>
                        <th>Events</th>
                        <th>Usage</th>
                        <th>Duration</th>
                        <th>Flow Rate</th>
                    </tr>

                    {dataset.map((data, ind) => {
                        return (
                            <tr key={ind} className='table-row'>
                                <td>{data.time}</td>
                                <td>{data.events}</td>
                                <td>{data.usage}</td>
                                <td>19:41:23.0</td>
                                <td>2.02</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Statistics;

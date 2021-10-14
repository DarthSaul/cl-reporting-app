import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import dataset from '../data';

const BarChart = () => {
    const d3Chart = useRef();

    useEffect(() => {
        // const padding = 60;
        const times = dataset.map(item => item.time);
        console.log(times);
        const usageLevels = dataset.map(item => Math.round(item.usage));
        console.log(usageLevels);
        const eventLevels = dataset.map(item => Math.round(item.events));
        console.log(eventLevels);

        const margin = { top: 50, right: 30, bottom: 30, left: 30 };
        const width =
            parseInt(d3.select('#demo').style('width')) -
            margin.left -
            margin.right;
        const height =
            parseInt(d3.select('#demo').style('height')) -
            margin.top -
            margin.bottom;
        console.log(height);
        // Set up chart
        const svg = d3
            .select(d3Chart.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .style('background-color', 'white')
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        // x axis scale
        const x = d3
            .scaleLinear()
            .domain([0, d3.max(times)])
            .range([0, width]);
        svg.append('g')
            .attr('tranform', `translate(0, 50)`)
            .call(d3.axisBottom(x));

        // y axis scale
        const y = d3
            .scaleLinear()
            .domain([0, d3.max(usageLevels)])
            .range([height, 0]);
        svg.append('g').call(d3.axisLeft(y));
        // svg.selectAll('rect')
        //     .data(dataset)
        //     .enter()
        //     .append('rect')
        //     .attr('x', (d, i) => i * 100)
        //     .attr('y', d => 500 - 3 * d)
        //     .attr('width', 50)
        //     .attr('height', d => 3 * d);
    });

    return (
        <div className='bar-chart' id='demo'>
            <svg ref={d3Chart}></svg>
        </div>
    );
};

export default BarChart;

// const xScale = d3
//     .scaleLinear()
//     .domain([0, d3.max(dataset, d => d.time)])
//     .range([padding, w - padding]);
// const yScale = d3
//     .scaleLinear()
//     .domain([0, d3.max(dataset, d => d.usage)])
//     .range([padding, w - padding]);
// const xAxis = d3.axisBottom(xScale);
// const yAxis = d3.axisLeft(yScale);
// svg.append('g')
//     .attr('transform', `translate(0, ${h - padding})`)
//     .call(xAxis);
// svg.append('g')
//     .attr('transform', `translate(${padding}, 0)`)
//     .call(yAxis);

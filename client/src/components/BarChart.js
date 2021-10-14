import React, { useEffect, useRef } from 'react';
// import { Switch, Route } from 'react-router-dom';
import * as d3 from 'd3';
import dataset from '../data';

const BarChart = () => {
    const d3Chart = useRef();

    useEffect(() => {
        const padding = 60;
        const chartWidth =
            parseInt(d3.select('#chart').style('width')) - padding;
        const chartHeight =
            parseInt(d3.select('#chart').style('height')) - padding;
        const svg = d3
            .select(d3Chart.current)
            .attr('width', chartWidth + padding)
            .attr('height', chartHeight + padding);
        const x = d3
            .scaleBand()
            .domain(d3.range(dataset.length))
            .range([padding, chartWidth - padding]);
        svg.append('g')
            .attr('transform', 'translate(0, ' + chartHeight + ')')
            .call(d3.axisBottom(x));
        svg.append('text')
            .attr('class', 'x-label')
            .attr('x', padding)
            .attr('y', chartHeight + 40)
            .text('Hour')
            .style('font-size', '1.1em');

        const max = d3.max(dataset, d => d.usage);
        const y = d3
            .scaleLinear()
            .domain([0, max])
            .range([chartHeight, padding]);

        const max2 = d3.max(dataset, d => d.events);
        const y2 = d3
            .scaleLinear()
            .domain([0, max2])
            .range([chartHeight, padding]);

        svg.append('g')
            .attr('transform', 'translate(' + padding + ', 0)')
            .call(d3.axisLeft(y));
        svg.append('text')
            .attr('x', padding + 20)
            .attr('y', padding)
            .text('Usage')
            .style('font-size', '1.1em')
            .style('color', 'navy');

        svg.append('g')
            .attr('transform', 'translate(' + (chartWidth - padding) + ', 0)')
            .call(d3.axisRight(y2));
        svg.append('text')
            .attr('x', chartWidth - padding - 75)
            .attr('y', padding)
            .text('Events')
            .style('font-size', '1.1em')
            .attr('fill', 'teal');

        svg.append('g')
            .attr('fill', 'navy')
            .selectAll('rect')
            .data(dataset)
            .join('rect')
            .attr('x', (d, i) => x(i))
            .attr('y', d => y(d.usage))
            .attr('height', d => y(0) - y(d.usage))
            .attr('width', x.bandwidth() / 3);
        svg.append('g')
            .attr('fill', 'teal')
            .selectAll('rect')
            .data(dataset)
            .join('rect')
            .attr('x', (d, i) => x(i) + x.bandwidth() / 3)
            .attr('y', d => y(d.events))
            .attr('height', d => y(0) - y(d.events))
            .attr('width', x.bandwidth() / 3);
    });

    return (
        <div className='bar-chart' id='chart'>
            <svg ref={d3Chart}></svg>
        </div>
    );
};

export default BarChart;

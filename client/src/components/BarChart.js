import React, { useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
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
        svg.append('g')
            .attr('transform', 'translate(' + (chartWidth - padding) + ', 0)')
            .call(d3.axisRight(y2));

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
        <div class='bar-chart' id='chart'>
            <svg ref={d3Chart}></svg>
        </div>
    );
};

export default BarChart;

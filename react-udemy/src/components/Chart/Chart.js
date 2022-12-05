import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar.js"

const Chart = (props) => {

    const arrVal = props.dataPoints.map(dataPoint => dataPoint.value);
    let totalMaximum = Math.max(...arrVal);

    return <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar
            key = {dataPoint.label}
            value = {dataPoint.value}
            maxValue = {totalMaximum}
            label = {dataPoint.label}></ChartBar>
        ))}
    </div>
}

export default Chart;

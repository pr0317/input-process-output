import { defaultConfig } from "next/dist/server/config-shared";
import React from "react";
import { Bar } from 'react-chartsjs-2';

function BarChart(chartData){
    return <Bar data={chartData}/>;
}

export default BarChart;
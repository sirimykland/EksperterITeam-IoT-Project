import React, { Component } from 'react';
import './App.css';
import { Chart } from "react-google-charts";

//google.charts.load('current', { 'packages': ['corechart'] });

class Graph extends Component {

  render() {
    return (
      <Chart
        chartType="ScatterChart"
        data={[["dB", "Time"], [4, 55], [6, 63], [8, 73]]}
        width="100%"
        height="500px"
        legendToggle
      />
    );
  }
}

export default Graph;
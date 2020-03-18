import React, { Component } from 'react';
import './App.css';
import { Chart } from "react-google-charts";
import Alert from 'react-bootstrap/Alert';

class Graph extends Component {
  render() {
    if (this.props.datoSort[this.props.activekey]) {
      return (
        <div>
          {this.props.datoSort[this.props.activekey] ?
            <Chart
              chartType="ScatterChart"
              data={this.props.datoSort[this.props.activekey]}
              width="100%"
              height="100%"
              legendToggle
            /> : <Alert variant="danger">Failed to fetch data for graph.</Alert>}
        </div>
      );
    } else {
      return (<Alert variant="danger">Det har skjedd en feil i grafen</Alert>);
    }
  }
}

export default Graph;
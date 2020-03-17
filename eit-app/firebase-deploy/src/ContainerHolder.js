import React, { Component } from 'react';
import Papa from 'papaparse'
import './ContainerHolder.css';
import DataTable from './DataTable';
import Graph from './Graph';
import Container from 'react-bootstrap/Container';

class ContainerHolder extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    this.fetchData();
    var arr = [];
    var keyval = [];
    Object.keys(this.state.data).forEach(function(key) {
      arr.push(this.state.data[key]);
      keyval.push(this.state.data[key]);
    });
    this.setState({data : arr});
  }
  fetchData() {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9AtVZEPYsIuL1DtbFxrK1A2GIb2A1pp18Cp0uS62TFcxpoe6uBbMEPfldvU06Ud3gbHX-u_VMbByC/pub?output=csv';
    const config =       {
      header: true,
      dynamicTyping: true,
      comments: "#"
    };
    const decoder = new TextDecoder("utf-8");
    fetch(url)
    .then(response =>response.body.getReader())
    .then((reader) =>  reader.read())
    .then(result => decoder.decode(result.value))
    .then(csv =>  Papa.parse(csv, config))
    .then(result => this.setState({data : result.data}));
  }

  render() {
    return  (
      <Container>
      <Graph data={this.state.data}></Graph>
      <DataTable data={this.state.data}></DataTable>
      </Container>
    );
  }
}

export default ContainerHolder;
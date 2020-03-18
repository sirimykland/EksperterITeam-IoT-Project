import React, { Component } from 'react';
import Papa from 'papaparse'
import './ContainerHolder.css';
import DataTable from './DataTable';
import Graph from './Graph';
import Container from 'react-bootstrap/Container';
import Button from '@material-ui/core/Button';
import Alert from 'react-bootstrap/Alert';

class ContainerHolder extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      datoSort: [],
      chosenDate: "2020-03-11"
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  sortData = (result) => {
    var map = new Map();
    var key;
    result.forEach((item) => {
      key = item.dato;
      if (!map[key]) {
        map[key] = [];
        map[key].push(["Tidspunkt", "dB"]);
      }
      map[key].push([new Date(item.timestamp).toLocaleTimeString('nb-NO'), item.dB]);
    });
    this.setState({ datoSort: map });
  }
  async fetchData() {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9AtVZEPYsIuL1DtbFxrK1A2GIb2A1pp18Cp0uS62TFcxpoe6uBbMEPfldvU06Ud3gbHX-u_VMbByC/pub?output=csv';
    const config = {
      header: true,
      dynamicTyping: true,
      comments: "#"
    };
    const decoder = new TextDecoder("utf-8");
    fetch(url)
      .then(response => response.body.getReader())
      .then((reader) => reader.read())
      .then(result => decoder.decode(result.value))
      .then(csv => Papa.parse(csv, config))
      .then(result => {
        this.setState({ data: result.data })
        this.sortData(result.data)
      });
  }
  newDate(date) {
    this.setState({ chosenDate: date });
    this.forceUpdate();
  }

  render() {
    var keys = Object.keys(this.state.datoSort);
    return (
      <Container>
        <h1 className="display-3">Bruks data </h1>
        {this.state.chosenDate ? <h4> for {new Date(this.state.chosenDate).toLocaleDateString('nb-NO')}</h4> : "Choose Date"}
        {keys ? keys.map(date => (
          <React.Fragment key={date}>
            <Button onClick={() => this.newDate(date)} variant="outlined">{date}</Button>
          </React.Fragment>
        )) : <Alert variant="danger">Can't resolve dates.</Alert>}
        <Graph activekey={this.state.chosenDate} state={this.state} datoSort={this.state.datoSort}></Graph>
        <DataTable activekey={this.state.chosenDate} fullData={this.state.data} datoSort={this.state.datoSort}></DataTable>
        <Button
          variant="contained"
          size="large">
          <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS9AtVZEPYsIuL1DtbFxrK1A2GIb2A1pp18Cp0uS62TFcxpoe6uBbMEPfldvU06Ud3gbHX-u_VMbByC/pub?output=csv">
            Last ned data
            </a>
        </Button>
      </Container>
    );
  }
}

export default ContainerHolder;
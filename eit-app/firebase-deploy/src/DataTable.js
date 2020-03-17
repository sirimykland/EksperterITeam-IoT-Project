import React, { Component } from 'react';
import './Table.css';
import Row from './Row';
import Table from 'react-bootstrap/Table'
import TimeAgo from 'react-timeago'
import norwegianStrings from 'react-timeago/lib/language-strings/no'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(norwegianStrings)

class DataTable extends Component {

  createTable = () => {
    let content = this.props.data;
    var date = new Date();
    return (
      <Table striped bordered hover>
        <thead><tr><th>Dato</th><th>Klokkeslett</th><th>dB</th></tr></thead>
        <tbody>
          {content.map((item) =>
            <Row timestamp={item.timestamp} device_id={item.device_id} dB={item.dB} ></Row>
          )}
        </tbody>
        <tfoot className={"tfoot"}><tr><td colSpan="3"><TimeAgo date={date} formatter={formatter} /></td></tr></tfoot>
      </Table>
    );
  }
  render() {
    return this.createTable();
  }
}

export default DataTable;
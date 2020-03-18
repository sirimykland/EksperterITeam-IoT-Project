import React, { Component } from 'react';
import './Table.css';
import Row from './Row';
import Table from 'react-bootstrap/Table'
import TimeAgo from 'react-timeago'
import Alert from 'react-bootstrap/Alert';
import norwegianStrings from 'react-timeago/lib/language-strings/no';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import Switch from '@material-ui/core/Switch';

const formatter = buildFormatter(norwegianStrings)

class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      checkedB: true
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };
  createTable = () => {
    var date = new Date();
    if (this.props.datoSort[this.props.activekey]) {
      const sortedContent = this.props.datoSort[this.props.activekey];
      const allContent = this.props.fullData;

      return (
        <div className='table-container'>
          <span>All data</span>
          <Switch
            checked={this.state.checkedB}
            onChange={this.handleChange}
            name="checkedB"
            color="primary"
          />
          <span>Vis valgt dato</span>

          {this.state.checkedB ?
            [(sortedContent
              ?
              <Table striped bordered hover key={0}>
                <tbody>
                  {sortedContent.map((item) =>
                    <Row key={item[0]} time={item[0]} dB={item[1]}></Row>
                  )}
                </tbody>
                <tfoot className={"tfoot"}><tr><td colSpan="2"><TimeAgo date={date} formatter={formatter} /></td></tr></tfoot>
              </Table>
              : <Alert variant="danger">Failed to fetch data for dato :{this.props.activekey}</Alert>)
            ]
            :
            [(allContent
              ?
              <Table striped bordered hover key={1}>
                <tbody>
                  <tr><td>Dato</td><td>Klokkeslett</td><td>dB</td></tr>
                  {allContent.map((item) =>
                    <Row key={item.timestamp} date={item.dato} time={item.tidspunkt} dB={item.dB} ></Row>
                  )}
                </tbody>
                <tfoot className={"tfoot"}><tr><td colSpan="3">Hentet <TimeAgo date={date} formatter={formatter} /></td></tr></tfoot>
              </Table>
              : <Alert variant="danger">Failed to fetch data for full table.</Alert>)
            ]}
        </div>
      );
    } else {
      return (<div>
        <Alert variant="danger">Det har skjedd en feil</Alert>
      </div>);
    }
  }
  render() {
    return this.createTable();
  }
}

export default DataTable;
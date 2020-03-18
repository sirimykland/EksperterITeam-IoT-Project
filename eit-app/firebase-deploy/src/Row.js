import React from 'react';
import './App.css';

function Row(props) {  
  if (props.time && props.dB) {
    return <tr>
      {props.date?<td>{new Date(props.date).toLocaleDateString('nb-NO')}</td>:null}
    <td>{props.time}</td>
    <td>{props.dB}</td></tr>;
  } else if (props.time && props.date && !props.dB) {
    return <tr> {props.date?<td>{new Date(props.date).toLocaleDateString('nb-NO')}</td>:null}<td>{props.time}</td><td>Ingen måling</td></tr>;
  }
  return <tr><td>-</td><td>-</td><td>-</td></tr>;
}

export default Row;
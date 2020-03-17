import React from 'react';
import './App.css';

function Row(props) {
  var date=new Date(props.timestamp)
  if (props.timestamp && props.dB) {
    return <tr><td>{date.toLocaleDateString()}</td><td>{date.toLocaleTimeString()}</td><td>{props.dB}</td></tr>;
  } else if (props.timestamp && !props.dB) {
    return <tr><td>{date.toLocaleDateString()}</td><td>{date.toLocaleTimeString()}</td><td>Ingen måling</td></tr>;
  }
  return <tr><td>-</td><td>-</td><td>-</td></tr>;
}

export default Row;
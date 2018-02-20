import React, {Component} from 'react';

const defaultStyle = {
  color: '#FFFCF2',
}

export default class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

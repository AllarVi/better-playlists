import React, {Component} from 'react';

const defaultStyle = {
  color: '#FFFCF2',
}

export default class PlaylistsCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2 className="blue">{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

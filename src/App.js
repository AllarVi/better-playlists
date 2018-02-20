import React, {Component} from 'react';

import PlaylistsCounter from './playlists-counter/PlaylistsCounter';
import HoursCounter from './hours-counter/HoursCounter';
import Filter from './filter/Filter';
import Playlist from './playlist/Playlist';
import './App.css';


const defaultStyle = {
  color: '#FFFCF2',
}

let fakeServerData = {
  user: {
    name: 'Allar',
    playlists: [
      {
        name: 'My favourites',
        songs: [
          {
            name: 'Beat It',
            duration: 1234
          },
          {
            name: 'Cry Me A River',
            duration: 1234
          },
          {
            name: 'Helicopter',
            duration: 1234
          },
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {
            name: 'Le Song',
            duration: 1234
          },
          {
            name: 'The Song',
            duration: 1234
          },
          {
            name: 'Bruno\'s song',
            duration: 1234
          },
        ]
      },
      {
        name: 'Playlist.js 3',
        songs: [
          {
            name: 'Le Song',
            duration: 1234
          },
          {
            name: 'The Song',
            duration: 1234
          },
          {
            name: 'Bruno\'s song',
            duration: 1234
          },
        ]
      },
      {
        name: 'Playlist.js 4',
        songs: [
          {
            name: 'Le Song',
            duration: 1234
          },
          {
            name: 'The Song',
            duration: 1234
          },
          {
            name: 'Bruno\'s song',
            duration: 1234
          },
        ]
      },
    ]
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        serverData: fakeServerData
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        {
          this.state.serverData.user ?
            <div>
              <h1 style={{...defaultStyle, 'font-size': '54px'}}>
                {
                  this.state.serverData.user.name
                }'s Playlists
              </h1>
              <PlaylistsCounter playlists={this.state.serverData.user.playlists}/>
              <HoursCounter playlists={this.state.serverData.user.playlists}/>
              <Filter/>
              {
                this.state.serverData.user.playlists.map(playlist =>
                  <Playlist playlist={playlist}/>
                )
              }
            </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
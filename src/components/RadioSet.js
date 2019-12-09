import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {
  constructor(props) {
    super();

    this.state = {
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    }

  }

  toggleFavorite(index, playlist) {
    const newState = {...this.state};
    const playlistTracks = [...newState[playlist]];
    const track = {...playlistTracks[index]};

    track.favorite = !track.favorite;

    playlistTracks[index] = track;
    newState[playlist] = playlistTracks;
    this.setState(newState);
  }

  sendToTop(index, playlist) {
    const newState = {...this.state};
    const playlistTracks = [...newState[playlist]];

    const track = playlistTracks[index];
    playlistTracks.splice(index, 1);
    playlistTracks.unshift(track);

    newState[playlist] = playlistTracks;
    this.setState(newState);
  }

  switchLists(index, fromPlaylist, toPlaylist) {
    const newState = {...this.state};
    
    const fromPlaylistTracks = [...newState[fromPlaylist]];
    const track = fromPlaylistTracks[index];
    fromPlaylistTracks.splice(index, 1);

    const toPlaylistTracks = [...newState[toPlaylist]];
    toPlaylistTracks.unshift(track);

    newState[fromPlaylist] = fromPlaylistTracks;
    newState[toPlaylist] = toPlaylistTracks;
    this.setState(newState);
  }

  render() {
    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.morningTracks}
            toggleFavorite={index => this.toggleFavorite(index, "morningTracks")}
            sendToTop={index => this.sendToTop(index, "morningTracks")}
            switchLists={index => this.switchLists(index, "morningTracks", "eveningTracks")}
          />
          <Playlist
            side="Evening"
            tracks={this.state.eveningTracks}
            toggleFavorite={index => this.toggleFavorite(index, "eveningTracks")}
            sendToTop={index => this.sendToTop(index, "eveningTracks")}
            switchLists={index => this.switchLists(index, "eveningTracks", "morningTracks")}
          />
        </section>
      </div>
    );
  }
}

export default RadioSet;
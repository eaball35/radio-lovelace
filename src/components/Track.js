import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

const Track = ({title, artist, playtime, albumart, favorite, toggleFavorite, sendToTop, switchLists}) => {
  return (
    <li className="track">
      <img className="track--albumart" alt={`album art for ${title}`} src={albumart} />
      <h3 className="track--title">{title}</h3>
      <input
        type="checkbox"
        className="track--favorite"
        checked={!favorite}
        onChange={toggleFavorite}
      />
      <p className="track--artist">{artist}</p>
      <p className="track--playtime">{playtime}</p>
      <button
        className="track--control track--to-top"
        onClick={sendToTop}
        >
        <span role="img" aria-label="send to top">🔝</span>
      </button>
      <button
        className="track--control track--switch"
        onClick={switchLists}
        >
        <span role="img" aria-label="switch lists">↔</span>
      </button>
    </li>
  );
};

Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
  toggleFavorite: PropTypes.func.isRequired,
  sendToTop: PropTypes.func.isRequired,
  switchLists: PropTypes.func.isRequired,
}

export default Track;
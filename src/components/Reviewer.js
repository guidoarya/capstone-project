import { React } from 'react';
import './Reviewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function Reviewer(props) {
  return (
    <>
      <div className="item-card-review">
        <div className="profile-review">
          <div className="image-char">
            <img src="https://www.clipartmax.com/png/middle/204-2045091_group-together-teamwork-icon-people-icon-flat-png.png" alt="profile-review" />
          </div>

          <p>{props.name}</p>
        </div>
        <div className="text-review">
          <h3>
            {' '}
            <FontAwesomeIcon icon={faQuoteLeft} className="icon-map" />
          </h3>
          <p>{props.text}</p>
          <h3 className="d-flex justify-content-end">
            {' '}
            <FontAwesomeIcon icon={faQuoteLeft} className="icon-map quote-2" />
          </h3>
        </div>
      </div>
    </>
  );
}

export default Reviewer;

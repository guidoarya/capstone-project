import { React } from "react";
import "./Reviewer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faUserAlt } from "@fortawesome/free-solid-svg-icons";

function Reviewer(props) {
  return (
    <>
      <div className="item-card-review">
        <div className="text-review">
          <h3>
            {" "}
            <FontAwesomeIcon icon={faQuoteLeft} className="icon-map" />
          </h3>
          <p>{props.text}</p>
          <h3 className="d-flex justify-content-end">
            {" "}
            <FontAwesomeIcon icon={faQuoteLeft} className="icon-map quote-2" />
          </h3>
          <div className="profile-review">
            <div className="icon-char">
              {" "}
              <FontAwesomeIcon icon={faUserAlt} className="icon-map" />
            </div>

            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviewer;

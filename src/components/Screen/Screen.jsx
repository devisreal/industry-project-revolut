import "./Screen.scss";
import screenTopBar from "../../assets/images/screen-top-bar.webp";
import screenHomeindicator from "../../assets/images/screen-home-indicator.png";
import resourcesIcon from "../../assets/images/resources-icon.png";
import { Link } from "react-router-dom";

const controlCircles = [1, 2, 3, 4, 5];

export default function Screen({
  children,
  screenNumber = 1,
  nextLink,
  previousLink,
  extraResources = false,
}) {
  return (
    <div className="screen">
      <img
        className="screen__top-bar-img"
        src={screenTopBar}
        alt="Image top bar"
      />
      <div className="screen__display">
        <div className="screen-header">
          <Link to="/" className="screen-header__cancel-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Link>

          {extraResources && (
            <img
              className="screen-header__resource-icon"
              src={resourcesIcon}
              alt="Resources icon"
            />
          )}
        </div>

        {children}

        <div className="screen__controls">
          {previousLink ? (
            <Link to={previousLink} className="screen__controls-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left-icon lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </Link>
          ) : (
            <span></span>
          )}

          <div className="screen__controls-circles">
            {controlCircles.map((circle) => (
              <div
                key={circle}
                className={`screen__controls-circle ${
                  screenNumber === circle
                    ? "screen__controls-circle--active"
                    : ""
                }`}
              ></div>
            ))}
          </div>

          {nextLink ? (
            <Link to={nextLink} className="screen__controls-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right-icon lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <span></span>
          )}
        </div>
        <div className="screen__home-indicator">
          <img
            className="screen__home-indicator-img"
            src={screenHomeindicator}
            alt="Home indicator"
          />
        </div>
      </div>
    </div>
  );
}

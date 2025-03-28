import "./LandingPage.scss";
import homepageImage from "../../assets/images/homescreen.png";
import carouselPng from "../../assets/images/carousel.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <img className="image__top" src={homepageImage} alt="" />
      <div className="carousel__container">
        <Link to="/explore-screen" className="carousel">
          <div className="body__wrapper">
            <h2 className="title">Your Revolut Recap</h2>
            <p className="body">
              Track your progess, and get smarter with your spending.
            </p>
          </div>
          <img className="carousel__image" src={carouselPng} alt="" />
        </Link>
      </div>
      {/* <img className="image__bottom" src={screenshot2} alt="" /> */}
    </div>
  );
}

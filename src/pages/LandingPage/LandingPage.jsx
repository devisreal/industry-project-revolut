import "./LandingPage.scss";
import homepageImage from "../../assets/images/homescreen.png";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <img className="image__top" src={homepageImage} alt="" />
      <div className="carousel">
        <p className="test">Test wrapper</p>
      </div>
      {/* <img className="image__bottom" src={screenshot2} alt="" /> */}
    </div>
  );
}

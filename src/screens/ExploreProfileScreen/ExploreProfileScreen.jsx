import Screen from "../../components/Screen/Screen";
import "./ExploreProfileScreen.scss";
import SocialSpender from "../../assets/images/social-spender-image.png";

export default function ExploreProfileScreen() {
  return (
    <Screen screenNumber={1} nextLink="/spending-category" previousLink="/">
      <div className="explore">
        <div className="image__wrapper">
          <img
            className="explore__image"
            src={SocialSpender}
            alt="Social Spender"
          />
        </div>
        <h2>The Social Spender</h2>
        <div className="card__wrapper">
          <article className="card">
            You're saving for big goals while just getting started.
          </article>
          <article className="card">
            Wheteher its a dinner or a dopamine drop, you're transactions say
            "let's hang out."
          </article>
          <article className="card">
            From rideshares to services, your money flows with your social life
          </article>
        </div>
      </div>
    </Screen>
  );
}

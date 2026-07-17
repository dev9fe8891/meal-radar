import Wrapper from "./AboutPage.styled";

function AboutPage() {
  return (
    <Wrapper className="about">
      <div className="about__container container">
        <p className="about__eyebrow">About Meal Radar</p>
        <h1 className="about__title">About Us</h1>
        <p className="about__description">
          Find inspiration for your next meal with Meal Radar. Our platform
          makes it easy to explore thousands of recipes, view clear ingredients,
          and follow step-by-step instructions. Built for performance, Meal
          Radar transforms recipe searching into a simple, delightful experience
          for every home cook.
        </p>
      </div>
    </Wrapper>
  );
}

export default AboutPage;

import "./style.scss";

// components
// utils
import { Route1 } from "../../utils/routes";

const About = () => {
  const content = <div className="about">content</div>;

  return <Route1 title="about" content={content} />;
};

export default About;

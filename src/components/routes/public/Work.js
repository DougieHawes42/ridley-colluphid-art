import "./style.scss";

// components
// utils
import { Route1 } from "../../utils/routes";

const Work = () => {
  const content = <div className="work">content</div>;

  return <Route1 title="work" content={content} />;
};

export default Work;

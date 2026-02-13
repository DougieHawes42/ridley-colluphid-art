import "./style.scss";

// components
// utils
import { Route1 } from "../../utils/routes";

const Blog = () => {
  const content = <div className="blog">content</div>;

  return <Route1 title="blog" content={content} />;
};

export default Blog;

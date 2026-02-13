import "./style.scss";

// components
// utils
import { Route1 } from "../../utils/routes";

const SignIn = () => {
  const content = <div className="sign-in">content</div>;

  return <Route1 title="sign-in" content={content} />;
};

export default SignIn;

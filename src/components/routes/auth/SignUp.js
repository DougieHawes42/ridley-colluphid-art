import "./style.scss";

// components
// utils
import { Route1 } from "../../utils/routes";

const SignUp = () => {
  const content = <div className="sign-up">content</div>;

  return <Route1 title="sign-up" content={content} />;
};

export default SignUp;

import { TbBulb, TbBulbOff } from "react-icons/tb";

import "./style.scss";

const ModeToggle = ({ onClick, darkmode }) => {
  return (
    <div
      className={`mode-toggle ${darkmode ? "mode-toggle-darkmode" : "mode-toggle-lightmode"}`}
      onClick={onClick}
    >
      {darkmode ? <TbBulb /> : <TbBulbOff />}
    </div>
  );
};

export default ModeToggle;

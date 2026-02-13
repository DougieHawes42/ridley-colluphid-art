import { motion } from "framer-motion";

import "./style.scss";

export const Route1 = ({ darkmode, title, content }) => (
  <div
    className={`route route1 ${darkmode ? "route1-darkmode" : "route1-lightmode"}`}
  >
    <motion.h2
      className="route-title"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="route-content"
      initial={{ opacity: 0, y: 21 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      {content}
    </motion.div>
  </div>
);

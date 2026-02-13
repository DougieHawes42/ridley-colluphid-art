import axios from "axios";

import { useState, useEffect } from "react";

import "./style.scss";

// components
// utils
import { Route1 } from "../../utils/routes";

const Home = () => {
  const [connectionMessage, setConnectionMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api`);
        setConnectionMessage(res.data.message);
      } catch (error) {
        console.error(`error fetching from backend: ${error}`);
      }
    };

    fetchMessage();
  }, []);

  const content = <div className="home">{connectionMessage}</div>;

  return <Route1 title="home" content={content} />;
};

export default Home;

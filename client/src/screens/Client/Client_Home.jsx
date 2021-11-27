import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import List from "../../components/List"

const Client_Home = () => {
  const [upcoming, setupcoming] = useState([]);
  const [nowplaying, setnowplaying] = useState([]);
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const upc = axios.get("/api/home/upc");
  const curr = axios.get("/api/home/curr");
  const listRef = useRef();
  
  useEffect(async () => {
    axios.all([upc, curr]).then(
      axios.spread((...res) => {
        setupcoming(res[0].data);
        setnowplaying(res[1].data);
      })
    );
  }, []);
  return (
    <div>
      <List list={upcoming}/>
      <List list={nowplaying}/>
      </div>
    
  );
};

export default Client_Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [var1, setVar1] = useState(0);
  const hh = {};

  useEffect(() => {
    console.log(var1, hh);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Home;

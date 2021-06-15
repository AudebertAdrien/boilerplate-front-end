import React from "react";
import axios from "axios";

function Home() {
  axios
    .get("http://localhost:3000/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return <div>Home</div>;
}

export default Home;

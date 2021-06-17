import axios from "axios";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";
import List from "../components/list";

function Home() {
  axios
    .get("http://localhost:3000/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="d-flex flex-column justify-content-between">
      <div>
        <Navbar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <List />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

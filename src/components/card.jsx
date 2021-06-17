import { useState, useEffect } from "react";
import axios from "axios";

function card() {
  const [photos, setPhotos] = useState();

  console.log(photos);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios("https://jsonplaceholder.typicode.com/photos");
      setPhotos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="card m-4">
        <img
          src="https://via.placeholder.com/200/ebc028"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card m-4">
        <img
          src="https://via.placeholder.com/200/ebc028"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card m-4">
        <img
          src="https://via.placeholder.com/200/ebc028"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card m-4">
        <img
          src="https://via.placeholder.com/200/ebc028"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default card;

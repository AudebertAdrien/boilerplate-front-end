import { useState, useEffect } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";
import List from "../components/list";

import { useSelector, useDispatch } from "react-redux";
import { getList } from "../store/list.selectors";
import { fetchSortedList } from "../store/list.actions";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector(getList);
  const [category, setCategory] = useState("vegetable");

  // Set list and define active list
  function handlClick(i) {
    setCategory(i);
  }

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchSortedList(category));
    };
    fetchData();
  }, [category]);

  return (
    <div className="d-flex flex-column justify-content-between">
      <div>
        <Navbar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <List handlClick={handlClick} category={category} />
          </div>
          <div className="col">
            <Card list={list} />
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

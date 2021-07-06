import { useState, useEffect } from "react";

import Card from "../common-components/Card";
import List from "../common-components/List";

import { useSelector, useDispatch } from "react-redux";
import { getList } from "../modules/list/list.selectors";
import { fetchSortedList } from "../modules/list/list.actions";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector(getList);
  const [category, setCategory] = useState("vegetable");

  // Set list and define active list
  function handlClick(i) {
    setCategory(i);
  }

  // It's better not to fetch every time the database when we change categories
  // but it's not the purpose of the practice of redux
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchSortedList(category));
    };
    fetchData();
  }, [category]);

  return (
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
  );
}

export default Home;

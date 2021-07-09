import { useState, useEffect } from "react";

import Card from "../common-components/Card";
import Categories from "../common-components/Categories";

import { useSelector, useDispatch } from "react-redux";
import { getList } from "../modules/list/list.selectors";
import { fetchSortedList } from "../modules/list/list.actions";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector(getList);
  const [category, setCategory] = useState("cat");

  // Set list and define active list
  function handlClick(i) {
    setCategory(i);
  }

  // It's better not to fetch every time the database when we change categories
  // but it's not the purpose of my practice of redux
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchSortedList(category));
    };
    fetchData();
  }, [category]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Categories handlClick={handlClick} category={category} />
        </div>
        <div className="col">
          <Card list={list} category={category} />
        </div>
      </div>
    </div>
  );
}

export default Home;

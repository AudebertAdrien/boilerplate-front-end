import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";
import List from "../components/list";

function Home() {
  const [fullList, setFullList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("vegetable");
  const [isfiltering, setIsFiltering] = useState(false);

  // Set list and define active list
  function handlClick(i) {
    setCategory(i);
  }

  // Search bar filtering
  const filterResults = (input) => {
    console.log("filterResults")
    let result = fullList.filter((item) => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1;
    });
    setFiltered(result);
  };

  useEffect(() => {
    // Get all groceries datas from json
    const fetchData = async () => {
      const groceryDatas = await axios("http://localhost:3000/");
      let list = groceryDatas.data.list;

      if (!isfiltering) {
        list = list.filter((item) => {
          if (item.type == category) return item;
        });
        setFullList(list);
      } else {
        setFullList(list);
      }
    };
    fetchData();
    // toggle search bar
  }, [category, isfiltering]);


  return (
    <div className="d-flex flex-column justify-content-between">
      <div>
        <Navbar filterResults={filterResults} setIsFiltering={setIsFiltering} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <List handlClick={handlClick} category={category} />
          </div>
          <div className="col">
            <Card
              list={isfiltering ? filtered : fullList}
            />
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

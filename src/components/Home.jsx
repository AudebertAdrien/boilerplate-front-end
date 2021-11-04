import Table from './Table';
import Spend from './Spend';
import Revenue from './Revenue';

function Home() {
  return (
    <>
      <Table />
      <div className="container">
        <div className="row">
          <div className="col-sm mb-5">
            <Spend />
          </div>
          <div className="col-sm">
            <Revenue />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

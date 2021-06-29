// import Modal from "../components/modal";

function card({ list }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {list.map((item) => {
        return (
          <div className="card m-4" key={item.id}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.type}</p>
              <button className="btn btn-primary" data-toggle="modal" /* data-target={`#${item.name}`} */>
                Go somewhere
              </button>
              {/* <Modal item={item}/> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default card;

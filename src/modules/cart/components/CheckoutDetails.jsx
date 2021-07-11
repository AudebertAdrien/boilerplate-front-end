function checkoutDetails({ item }) {
  return (
    <div className="d-flex flex-column mt-1 checkout_detail_item">
      <div className="row justify-content-between">
        <h6>{item.name}</h6>
        <img className="checkout_image" src={item.image} alt="" />
      </div>
      <div className="row">
        <div>
          <h6 className="text-success font-weight-bold ml-1">{`Cost per unit  : €${item.price}`}</h6>
        </div>
        <div>
          <h6 className="text-success font-weight-bold ml-1">{`Total cost : ${
            item.count
          } x €${item.price * item.count}`}</h6>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default checkoutDetails;

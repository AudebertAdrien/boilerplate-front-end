function checkoutDetails({ item }) {
  return (
    <div className="checkout_detail_item mt-1">
      <h6>{item.name}</h6>
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
  );
}

export default checkoutDetails;

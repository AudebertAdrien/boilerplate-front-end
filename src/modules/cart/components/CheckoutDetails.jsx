function checkoutDetails({ item }) {
  return (
    <>
      <div className="d-flex justify-content-between" key={item.id}>
        <div className="mt-1">
          <h6>{item.name}</h6>
          <div>
            <h6 className="text-success font-weight-bold ml-1">{`Cost per unit  : €${item.price}`}</h6>
          </div>
          <div>
            <h6 className="text-success font-weight-bold ml-1">{`Total cost : €${
              item.price * item.count
            }`}</h6>
          </div>
        </div>
      </div>
      <p>
        Insurance claim and all neccessary dependencies will be submitted to
        your insurer for the covered portion of this order.
      </p>
      <hr />
    </>
  );
}

export default checkoutDetails;

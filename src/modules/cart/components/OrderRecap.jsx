import { useDispatch } from "react-redux";
import { fetchPaymentIntent } from "../cart.actions";

function OrderRecap({ shoppingList }) {
  const dispatch = useDispatch();
  let amount = 0;

  return (
    <div className="col-md-4 text-end">
      <div className="bg-pay p-3">
        <span className="font-weight-bold">Order Recap</span>

        <hr />
        {shoppingList.map((item) => {
          return (
            <div key={item.id}>
              <div className="mt-1">
                <h6>{item.name}</h6>
                <div>
                  <h6 className="text-success font-weight-bold">{`Cost per unit  : €${item.price}`}</h6>
                </div>
                <div>
                  <h6 className="text-success font-weight-bold">{`${
                    item.count
                  } x : €${item.price * item.count}`}</h6>
                </div>
              </div>
            </div>
          );
        })}
        <hr />
        <div className="d-flex justify-content-between mt-2">
          <span className="fw-500">Tax</span>
          <span> + 10.00€</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className="fw-500">Total</span>
          <span className="text-success">
            {
              (amount = shoppingList.reduce((acc, item) => {
                {
                  return acc + item.price * item.count;
                }
              }, 10))
            }
            €
          </span>
        </div>
      </div>
      <div className="buttons">
        <button
          className="btn btn-success btn-block w-auto"
          onClick={() => dispatch(fetchPaymentIntent(amount))}
        >
          Proceed to payment
        </button>
      </div>
    </div>
  );
}

export default OrderRecap;

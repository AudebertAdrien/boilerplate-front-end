import { useSelector } from "react-redux";
import { cartShoppingListSelector } from "../modules/cart/cart.selectors";

import { Link } from "react-router-dom";
import CheckoutDetails from "../modules/cart/components/CheckoutDetails";
// import OrderRecap from "../modules/cart/components/OrderRecap";

export default function Cart() {
  const shoppingList = useSelector(cartShoppingListSelector);
  console.log(shoppingList);
  return (
    <div className="container mt-3 mb-3">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex flex-row align-items-center">
          <h4 className="text-uppercase mt-1">Eligible</h4>
          <span className="ml-2">Pay</span>
        </div>
        <Link to="/" className="cancel com-color">
          Cancel and return to website
        </Link>
      </div>
      <div className="row">
        <h5 className="mb-0 text-success">$85.00</h5>
        <h5 className="mb-3">Diabities Pump Supplies</h5>
        <div className="col-md-6 about">
          {shoppingList.map((item) => {
            return (
              <>
                <CheckoutDetails item={item} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="col-md-2">toto</div>
        <div className="col-md-4">toto</div> */
}
{
  /* <OrderRecap shoppingList={} /> */
}

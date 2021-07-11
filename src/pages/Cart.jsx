import { useSelector } from "react-redux";
import { cartShoppingListSelector } from "../modules/cart/cart.selectors";

import { Link } from "react-router-dom";
import CheckoutDetails from "../modules/cart/components/CheckoutDetails";
import OrderRecap from "../modules/cart/components/OrderRecap";

export default function Cart() {
  const shoppingList = useSelector(cartShoppingListSelector);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex flex-row align-items-center">
          <h4 className="text-uppercase mt-1">Stripe</h4>
          <span>Pay</span>
        </div>
        <Link to="/" className="cancel">
          Return to home
        </Link>
      </div>
      <div className="row">
        <div className="checkout_detail col-md-6">
          <h5 className="mb-3">Detailed Shopping List </h5>
          <div className="about">
            {shoppingList.map((item) => {
              return (
                <div className="d-flex justify-content-between" key={item.id}>
                  <CheckoutDetails item={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-2"></div>
        <OrderRecap shoppingList={shoppingList} />
      </div>
    </div>
  );
}

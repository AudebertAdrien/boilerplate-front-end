import { useState, useEffect, useRef } from "react";
import { Modal } from "bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../store/cart.selectors";
import { incrementCart, decrementCart } from "../store/cart.actions";

import { isEmpty } from "../utils/utils";

function BoostrapModal({ item }) {
  const dispatch = useDispatch();
  const numberOfItem = useSelector(cartSelector(item.id));
  console.log(numberOfItem);
  // interactive bootstrap "modal" with js
  const [modal, setModal] = useState(null);
  const exampleModal = useRef();
  useEffect(() => {
    setModal(new Modal(exampleModal.current));
  }, []);

  return (
    <div>
      {/* show btn Modal */}
      <button
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${item.name}`}
        onClick={() => modal.show()}
      >
        Go somewhere
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        ref={exampleModal}
        id={item.name}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {item.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => modal.hide()}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>{item.description}</div>
              <div>&euro;{item.price}</div>
            </div>

            {/* Minus / Plus button */}
            <div className="btn-group" role="groupe" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => dispatch(decrementCart(item))}
              >
                -
              </button>
              <span className="btn btn-light qty">
                {!isEmpty(numberOfItem) ? numberOfItem.count : 0}
              </span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => dispatch(incrementCart(item))}
              >
                +
              </button>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => modal.hide()}
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-success"
                onClick={() => console.log("test")}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoostrapModal;

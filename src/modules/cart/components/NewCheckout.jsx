function NewCheckout({ item }) {
  return (
    <div className="cart_items">
      <div className="cart_item_image">
        <img src={item.image} alt="" />
      </div>

      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
        <div className="cart_item_name cart_info_col">
          <div className="cart_item_title">Name</div>
          <div className="cart_item_text">{item.name}</div>
        </div>

        <div className="cart_item_quantity cart_info_col">
          <div className="cart_item_title">Quantity</div>
          <div className="cart_item_text">{item.count}</div>
        </div>

        <div className="cart_item_price cart_info_col">
          <div className="cart_item_title">Price</div>
          <div className="cart_item_text">€{item.price}</div>
        </div>

        <div className="cart_item_total cart_info_col">
          <div className="cart_item_title">Total</div>
          <div className="cart_item_text">
            {/* {`€
                      ${item.price * item.count}`} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCheckout;

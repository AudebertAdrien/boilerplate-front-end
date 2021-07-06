function OrderRecap() {
  return (
    <div className="col-md-4">
      <div className="bg-pay p-3">
        <span className="font-weight-bold">Order Recap</span>
        <div className="d-flex justify-content-between mt-2">
          <span className="fw-500">contracted Price</span>
          <span>$186.86</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className="fw-500">Amount Deductible</span>
          <span>$0.0</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className="fw-500">Coinsurance(0%)</span>
          <span>+ $0.0</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className="fw-500">Copayment </span> <span>+ 40.00</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between mt-2">
          <span className="lh-16 fw-500">
            Total Deductible,
            <br /> Coinsurance and copay
          </span>
          <span>$40.00</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className="lh-16 fw-500">
            Maximum out-of-pocket <br /> on insurance policy
          </span>
          <span>$40.00</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between mt-2">
          <span className="fw-500">Insurance Responsibility </span>
          <span>$71.76</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className="fw-500">Patient Balance </span>
          <span>$13.24</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between mt-2">
          <span className="fw-500">Total </span>
          <span className="text-success">$85.00</span>
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-success btn-block">
          Proceed to payment
        </button>
      </div>
    </div>
  );
}

export default OrderRecap;

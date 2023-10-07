import D from "../../assets/D.jpg";
function Card() {
  return (
    <>
      <div>
        <h1 align="center" style={{ margin: "20px" }}>
          New Arrivals
        </h1>
      </div>

      <div className="d-flex justify-content-around">
        <div class="card" style={{ width: "18rem", margin: "20px" }}>
          <img src={D} class="card-img-top" alt="Iphone" style={{}} />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">iPhone 15</h5>
            <p class="card-text d-flex justify-content-center">
              From ₹79900.00
            </p>
            <a href="#" class="btn btn-primary d-flex justify-content-center">
              Add to cart
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem", margin: "20px" }}>
          <img src={D} class="card-img-top" alt="Iphone" style={{}} />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">iPhone 15</h5>
            <p class="card-text d-flex justify-content-center">
              From ₹79900.00
            </p>
            <a href="#" class="btn btn-primary d-flex justify-content-center">
              Add to cart
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem", margin: "20px" }}>
          <img src={D} class="card-img-top" alt="Iphone" style={{}} />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">iPhone 15</h5>
            <p class="card-text d-flex justify-content-center">
              From ₹79900.00
            </p>
            <a href="#" class="btn btn-primary d-flex justify-content-center">
              Add to cart
            </a>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="d-flex justify-content-around">
        <div class="card" style={{ width: "18rem", margin: "20px" }}>
          <img src={D} class="card-img-top" alt="Iphone" style={{}} />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">iPhone 15</h5>
            <p class="card-text d-flex justify-content-center">
              From ₹79900.00
            </p>
            <a href="#" class="btn btn-primary d-flex justify-content-center">
              Add to cart
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem", margin: "20px" }}>
          <img src={D} class="card-img-top" alt="Iphone" style={{}} />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">iPhone 15</h5>
            <p class="card-text d-flex justify-content-center">
              From ₹79900.00
            </p>
            <a href="#" class="btn btn-primary d-flex justify-content-center">
              Add to cart
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem", margin: "20px" }}>
          <img src={D} class="card-img-top" alt="Iphone" style={{}} />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">iPhone 15</h5>
            <p class="card-text d-flex justify-content-center">
              From ₹79900.00
            </p>
            <a href="#" class="btn btn-primary d-flex justify-content-center">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

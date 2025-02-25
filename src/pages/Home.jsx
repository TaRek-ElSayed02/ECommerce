import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "js/jquery-3.3.1.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "js/main.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="position-relative vh-100 d-flex align-items-center justify-content-center text-white bg-dark">
        <img 
          src="img/hero/hero-2.jpg" 
          alt="Hero" 
          className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" 
        />
        <div className="position-absolute w-100 h-100 top-0 start-0 bg-dark bg-opacity-50"></div>
        <div className="position-absolute text-center">
          <h6 className="text-uppercase">New Arrivals</h6>
          <h2 className="fw-bold display-4">Spring - Summer 2030</h2>
          <p className="lead">Discover our latest collection designed for modern elegance and comfort.</p>
          <a href="#" className="btn btn-outline-light btn-lg">Explore Now</a>
        </div>
      </section>

      {/* Banner Section - Same Height */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-lg h-100">
                <img src="img/banner/banner-3.jpg" alt="Banner 1" className="card-img-top" />
                <div className="card-body text-center bg-light d-flex flex-column justify-content-between">
                  <h3 className="text-dark">Exclusive 1</h3>
                  <a href="#" className="btn btn-warning">Discover</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-lg h-100">
                <img src="img/banner/banner-2.jpg" alt="Banner 2" className="card-img-top" />
                <div className="card-body text-center bg-light d-flex flex-column justify-content-between">
                  <h3 className="text-dark">Exclusive 2</h3>
                  <a href="#" className="btn btn-warning">Discover</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-lg h-100">
                <img src="img/banner/banner-1.jpg" alt="Banner 3" className="card-img-top" />
                <div className="card-body text-center bg-light d-flex flex-column justify-content-between">
                  <h3 className="text-dark">Exclusive 3</h3>
                  <a href="#" className="btn btn-warning">Discover</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Follow Us on Instagram</h2>
          <div className="row g-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2 position-relative">
                <img 
                  src={`img/instagram/instagram-${i + 1}.jpg`} 
                  alt={`Instagram ${i + 1}`} 
                  className="img-fluid rounded shadow-sm"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100">
                  <i className="bi bi-instagram text-white fs-2"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
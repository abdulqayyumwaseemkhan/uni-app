import React from "react";

export const Footer = () => {
  return (
    <div className="container">
      <div className="container my-5">
        <footer
          className="text-center text-lg-start text-white" style={{ backgroundColor: '#7091E6' }}

        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Return value
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <a className="text-white">Graphics</a>
                  </p>
                  <p>
                    <a className="text-white">Html</a>
                  </p>
                  <p>
                    <a className="text-white">CSS</a>
                  </p>
                  <p>
                    <a className="text-white">JS</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Central Park Lahore
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> returnvalue@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 92 321 3994490
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 92 321 4727796
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <a
                    className="btn btn-primary btn-floating m-1"

                    style={{ backgroundColor: '#3b5998' }}
                    href="#!"
                    role="button"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: '#55acee' }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"

                    style={{ backgroundColor: '#dd4b39' }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"

                    style={{ backgroundColor: '#ac2bac' }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: '#0082ca' }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: '#333333' }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            © 2024 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              ReturnValue.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Footer;

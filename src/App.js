import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [className, setClassName] = useState(false);


  return (
    <>
      <div className={className ? "container back" : "container"}>
        <nav className="nav-container">
          <ul className={className ? "nav-ul toggle" : "nav-ul"}>
            <span className={className ? "logo center" : "logo"}>
            <i className="fas fa-car"></i> Automotive
            </span>
            <li
              onClick={() => setClassName(!className)}
              className={
                className ? "links high-light linkToggle" : "links high-light"
              }
            >
              Book Appointment
            </li>
            <li
              onClick={() => setClassName(!className)}
              className={className ? "links linkToggle" : "links"}
            >
              Contact
            </li>
            <li
              onClick={() => setClassName(!className)}
              className={className ? "links linkToggle" : "links"}
            >
              Price
            </li>
            <li
              onClick={() => setClassName(!className)}
              className={className ? "links linkToggle" : "links"}
            >
              Feature
            </li>
            <li
              onClick={() => setClassName(!className)}
              className={className ? "links linkToggle" : "links"}
            >
              Home
            </li>
          </ul>

          <>
            {className ? (
              <li className={"bars"} onClick={() => setClassName(false)}>
                <i className="fa fa-close"></i>
              </li>
            ) : (
              <li
                className={"bars"}
                onClick={() => {
                  setClassName(true);
                }}
              >
                <i className="fa fa-bars"></i>
              </li>
            )}
          </>
        </nav>
        {!className&&(
          <>
            <div className="middle">
              <h1 className="title">Your Car Repairs</h1>

              <p className="description">Visit us for your service</p>
              <button className="button">Book Appointment</button>
            </div>
          </>
        )}
      </div>
      <div className="footer">
          <div className="footer-title">
            <div className="footer-padd">
              <h3 className="h3">Our Location</h3>
              <p className="footerP">15 STreet Suburt Country 6000</p>
            </div>
          </div>
          <div className="footer-title">
            <div className="footer-padd">
              <h3 className="h3">Phone</h3>
              <p className="footerP">+61 040 400 4000</p>
            </div>
          </div>
          <div className="footer-title full-size">
            <div className="footer-padd">
              <h3 className="h3">Email</h3>
              <p className="footerP">automotive@carsales.com.au</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;

"use client"
import { useContext } from "react";
import { DataContext } from "@/context/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobeEurope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const { color } = useContext(DataContext);

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2> Contact Me </h2>
          </div>
        </div>
      </div>
      <h3 className="contact-title padd-15" style={{ color: color }}>
        {" "}
        Have You Any Question ?{" "}
      </h3>
      <h4 className="contact-sub-title padd-15">
        {" "}
        I&apos;M AT YOUR SERVICES{" "}
      </h4>
      <div className="row">
        {/* <===== Contact Info Item Start =====> */}
        <div className="contact-info-item padd-15">
          <div className="icon">
            <FontAwesomeIcon icon={faPhone} className="fa fa-phone" />
          </div>
          <h4 style={{ color: color }}> Call Us On </h4>
          <p> +92 315 1242828</p>
        </div>
        {/* <===== Contact Info Item End =====> */}
        {/* <===== Contact Info Item Start =====> */}
        <div className="contact-info-item padd-15">
          <div className="icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa fa-map-marker-alt" />
          </div>
          <h4 style={{ color: color }}> Office </h4>
          <p> Karachi </p>
        </div>
        {/* <===== Contact Info Item End =====> */}
        {/* <===== Contact Info Item Start =====> */}
        <div className="contact-info-item padd-15">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" />
          </div>
          <h4 style={{ color: color }}> Email </h4>
          <p> salmaniqbal2986@gmail.com</p>
        </div>
        {/* <===== Contact Info Item End =====> */}
        {/* <===== Contact Info Item Start =====> */}
        <div className="contact-info-item padd-15">
          <div className="icon">
            <FontAwesomeIcon icon={faGlobeEurope} className="fa fa-globe-europe" />
          </div>
          <h4 style={{ color: color }}> Website </h4>
          <p> www.domain.com </p>
        </div>
        {/* <===== Contact Info Item End =====> */}
      </div>
      <h3 className="contact-title padd-15" style={{ color: color }}> SEND ME AN EMAIL</h3>
      <h4 className="contact-sub-title padd-15">
        {" "}
        I&apos;M VERY RESPONSIVE TO MESSAGES{" "}
      </h4>
      {/* <===== Contact Form =====> */}
      <div className="row">
        <div className="contact-form padd-15">
          <div className="row">
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-item col-12 padd-15">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-item col-12 padd-15">
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-item col-12 padd-15">
              <button type="submit" className="btn rounded-lg text-white" style={{ backgroundColor: color }}>
                {" "}
                Send Message{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Contact;
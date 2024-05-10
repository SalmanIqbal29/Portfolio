"use client";
import { useContext } from "react";
import { DataContext } from "@/context/DataProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faMobileAlt,
  faRocket,
  faShoppingCart,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const { color } = useContext(DataContext);

  return (
    <section className="service section" id="services">
      <div className="container1">
        <div className="row">
          <div className="section-title padd-15">
            <h2> Services </h2>
          </div>
        </div>{" "}
        {/* // ** ---------Row Div---------- ** // */}
        <div className="row">
          {/* ===== Service Item Start ===== */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faCode}
                  className="fa fa-code"
                  style={{ color: color }}
                />
              </div>
              <h4> Front-End-Development </h4>
              <p>
                {" "}
                Creating responsive, dynamic websites using HTML5, CSS3, and
                TailwindCSS, with interactive functionality powered by
                JavaScript and frameworks like React JS and Next JS, enhanced by
                TypeScript for robustness.
              </p>
            </div>
          </div>
          {/* ===== Service Item End ===== */}
          {/* ===== Service Item Start ===== */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faWrench}
                  className="fa fa-wrench"
                  style={{ color: color }}
                  aria-hidden="true"
                />
              </div>
              <h4> Website Maintenance </h4>
              <p>
                {" "}
                Delivering unwavering support and detailed maintenance to keep
                your website running flawlessly, always up-to-date with the
                latest technologies, ensuring a seamless user experience and
                optimal performance.
              </p>
            </div>
          </div>
          {/* ===== Service Item End ===== */}
          {/* ===== Service Item Start ===== */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  className="fa fa-mobile-alt"
                  style={{ color: color }}
                />
              </div>
              <h4> Responsive Design </h4>
              <p>
                {" "}
                Improving user experience with meticulously optimized design for
                flawless functionality and visual appeal on desktops, mobile
                phones, and across various devices, ensuring consistent browsing
                satisfaction.
              </p>
            </div>
          </div>
          {/* ===== Service Item End ===== */}
          {/* ===== Service Item Start ===== */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="fa fa-laptop-code"
                  style={{ color: color }}
                />
              </div>
              <h4> Custom Web Development </h4>
              <p>
                {" "}
                Crafting bespoke web solutions precisely tailored to your
                requirements, whether it's a basic landing page or a
                sophisticated web application, ensuring each project aligns
                perfectly with your unique goals and objectives.
              </p>
            </div>
          </div>
          {/* ===== Service Item End ===== */}
          {/* ===== Service Item Start ===== */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="fa fa-shopping-cart"
                  style={{ color: color }}
                  aria-hidden="true"
                />
              </div>
              <h4> E-commerce Development </h4>
              <p>
                {" "}
                Developing secure and scalable e-commerce platforms that not
                only drive sales but also elevate user experiences, ensuring
                seamless transactions and optimal functionality for a robust
                online shopping environment.
              </p>
            </div>
          </div>
          {/* ===== Service Item End ===== */}

          {/* ===== Service Item Start ===== */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="fa fa-rocket"
                  style={{ color: color }}
                  aria-hidden="true"
                />
              </div>
              <h4> Performance Optimization </h4>
              <p>
                {" "}
                Enhancing your website's speed and performance through
                meticulous optimization, resulting in swift loading times and a
                fluid user experience, thereby maximizing user engagement and
                satisfaction across every interaction.
              </p>
            </div>
          </div>
          {/* ===== Service Item End ===== */}
        </div>{" "}
        {/* // ** --------- Container Div ---------- ** // */}
      </div>
    </section>
  );
};

export default Services;

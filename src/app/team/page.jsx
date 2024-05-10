"use client";
import { useContext } from "react";
import Image from "next/image";

import { DataContext } from "@/context/DataProvider";

import profilePic from "../../assets/images/portfolio image.png";

const Team = () => {
  const { color } = useContext(DataContext);

  return (
    <section className="service section" id="services">
      <div className="container1">
        <div className="row">
          <div className="section-title padd-15">
            <h2> Team </h2>
          </div>
        </div>{" "}
        {/* // ** ---------Row Div---------- ** // */}
        <div className="row">
          {/* ===== Service Item Start ===== */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <Image className="team-img rounded-full" src={profilePic} height={300} />
              <h4>
                {" "}
                SALMAN{" "}
                <span style={{ color: color }}>
                  (Full-Stack-Developer)
                </span>{" "}
              </h4>
              <p>
                {" "}
                Recognized for my proficiency in front-end development, I
                contribute a wealth of expertise to our collaborative team
                environment. With a track record of success spanning 8 months,
                I'm dedicated to crafting visually stunning and highly
                functional projects that elevate your brand and captivate your
                audience.
              </p>
            </div>
          </div>
          {/* ===== Service Item End ===== */}
          {/* ===== Service Item Start ===== */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              {/* <Image className="team-img" src={profilePic} height={300} /> */}
              <h4>
                {" "}
                NOMAN{" "}
                <span style={{ color: color }}>
                  (Full-Stack-Developer)
                </span>{" "}
              </h4>
              <p>
                {" "}
                Within our team, I serve as the front-end development
                specialist, driven by a relentless pursuit of excellence. Armed
                with 8 months of industry experience, I approach each project
                with a unique blend of creativity and technical prowess,
                delivering solutions that not only meet but surpass your
                objectives.
              </p>
            </div>
          </div>
          {/* ===== Service Item End ===== */}
          {/* ===== Service Item Start ===== */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              {/* <Image className="team-img" src={profilePic} height={300} /> */}
              <h4>
                {" "}
                ZEESHAN{" "}
                <span style={{ color: color }}>
                  (Full-Stact-Developer)
                </span>{" "}
              </h4>
              <p>
                {" "}
                As a forward-thinking member of our dynamic team, I'm deeply
                passionate about front-end development. With over 8 months of
                hands-on experience, I'm committed to infusing creativity and
                innovation into every project, ensuring they resonate with your
                audience and exceed your expectations.
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

export default Team;

"use client";
import { useContext } from "react";
import Link from "next/link";
import { DataContext } from "@/context/DataProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const { color } = useContext(DataContext);

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2 className="before:bg-[#db6b6b]">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  {" "}
                  I&apos;m Salman Iqbal and{" "}
                  <span style={{ color: color }}> Web Developer </span>
                </h3>
                <p>
                  I am a Full Stack Developer proficient in creating captivating
                  user interfaces and robust server-side solutions. My skills in
                  HTML, CSS, Tailwind, JavaScript, and TypeScript enable me to
                  design responsive layouts for front-end development, while my
                  expertise in back-end technologies such as Node.js, Express,
                  and MongoDB allows me to build scalable and efficient
                  server-side applications. I specialize in React.js and Next.js
                  for front-end development, leveraging their capabilities to
                  create dynamic websites and apps that engage users
                  effectively. Additionally, my knowledge of back-end
                  technologies enables me to integrate complex functionality and
                  database systems seamlessly. I am dedicated to staying updated
                  on the latest front-end and back-end trends, allowing me to
                  implement cutting-edge techniques and technologies in my
                  projects. Focused on delivering user-friendly designs and
                  robust functionality, I pay close attention to detail and
                  collaborate closely with team members to ensure deadlines are
                  met. I am committed to exceeding expectations and consistently
                  strive to deliver high-quality solutions that meet both client
                  requirements and industry standards.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    {" "}
                    <p>
                      Birthday : <span> 29 June 1986 </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    {" "}
                    <p>
                      Age : <span> 37 </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    {" "}
                    <p>
                      Website : <span> www.abc.com </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    {" "}
                    <p>
                      Email : <span> salmaniqbal2986@gmail.com </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    {" "}
                    <p>
                      Degree : <span> B.Com </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    {" "}
                    <p>
                      Mobile : <span> +92 315 1242828 </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    {" "}
                    <p>
                      City : <span> Islamabad </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    {" "}
                    <p>
                      Freelance : <span> Available </span>
                    </p>
                  </div>
                </div>

                <div className="row padd-15">
                  <div className="button">
                    <a
                      href="#"
                      className={`btn @apply text-base bg-[${color}] font-medium text-[white] inline-block whitespace-nowrap px-[35px] py-3 rounded-[40px] transition-all duration-[0.3s] ease-[ease] border-[none]`}
                    >
                      {" "}
                      Download CV
                    </a>
                    <Link
                      href="/contact"
                      className={`btn @apply text-base bg-[${color}] font-medium text-[white] inline-block whitespace-nowrap px-[35px] py-3 rounded-[40px] transition-all duration-[0.3s] ease-[ease] border-[none]`}
                    >
                      {" "}
                      Hire Me{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>HTML</h5>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "90%" }} />
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>CSS</h5>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "90%" }} />
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Tailwind Css</h5>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "80%" }} />
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Javascript</h5>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "70%" }} />
                      <div className="skill-percent">70%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5> Typescript</h5>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "70%" }} />
                      <div className="skill-percent">70%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>React JS</h5>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "80%" }} />
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Next JS</h5>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "80%" }} />
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Python</h5>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "0%" }} />
                      <div className="skill-percent">Upcoming</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="fa fa-calendar"
                          />{" "}
                          2000 - 2002
                        </h3>
                        <h4 className="timeline-title"> Matric in Science </h4>
                        <p className="timeline-text">Ahmed Grammar School</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="fa fa-calendar"
                          />{" "}
                          2002 - 2004
                        </h3>
                        <h4 className="timeline-title">
                          {" "}
                          Intermediate in Commerce{" "}
                        </h4>
                        <p className="timeline-text">
                          Govt. Boys Premier College
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="fa fa-calendar"
                          />{" "}
                          2009 - 2012
                        </h3>
                        <h4 className="timeline-title">
                          {" "}
                          Admin & HR Officer{" "}
                          {"(Pakistan Cosmetic Product) Karachi, Pakistan "}
                        </h4>
                        <p className="timeline-text">
                          I served as an Admin & HR Officer at Pakistan Cosmetic
                          Products Company.My key responsibilities : Responsible
                          for managing day-to-day office operations. This
                          includes organizing and maintaining files, records,
                          and office supplies. Manage data entry tasks and
                          maintain accurate records, such as employee records,
                          financial records, and other relevant documentation.
                          Manage the exit process when employees leave the
                          organization. Maintain records attendance and overtime
                          of permanent staff and contract staff.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="fa fa-calendar"
                          />{" "}
                          2013 - 2018
                        </h3>
                        <h4 className="timeline-title">
                          {" "}
                          Import & Export Officer
                          {" (Middle East Freight Forwarding Co.) Dubai, UAE "}
                        </h4>
                        <p className="timeline-text">
                          I served as an Admin & HR Officer at Pakistan Cosmetic
                          Products Company.My key responsibilities : Ensure
                          compliance with import regulations, including accurate
                          classification, valuation, and documentation of
                          imported goods. Obtain and manage the required import
                          licenses and permits for specific goods, if necessary.
                          Determine the correct Harmonized System (HS) codes for
                          imported goods to facilitate customs clearance and
                          calculate duties accurately. Prepare and submit
                          necessary documents to customs authorities, such as
                          commercial invoices, packing lists, bills of lading,
                          and certificates of origin. Collaborate with freight
                          forwarders, customs brokers, and other logistics
                          partners to ensure smooth customs clearance and timely
                          delivery of goods.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="fa fa-calendar"
                          />{" "}
                          2019 - 2021
                        </h3>
                        <h4 className="timeline-title">
                          {" "}
                          Cashier{" (Mawgif) Taif, Saudi Arabia"}
                        </h4>
                        <p className="timeline-text">
                          I served as an Admin & HR Officer at Pakistan Cosmetic
                          Products Company.My key responsibilities : Greet
                          customers in a friendly and professional manner.
                          Provide information about parking rates, policies, and
                          any special promotions. Assist customers with any
                          inquiries or issues related to parking services.
                          Collect parking fees from customers, whether in cash
                          or through electronic payment methods (credit/debit
                          cards, mobile payments). Issue receipts for payments
                          received.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* // ** --------- About Content ---------- ** // */}
        </div>{" "}
        {/* // ** --------- Row ---------- ** // */}
      </div>{" "}
      {/* // ** --------- Container Div ---------- ** // */}
    </section>
  );
};

export default About;

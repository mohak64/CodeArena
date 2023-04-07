import React, { useState } from "react";
import Logo from "../image/Logo.png";
import code from "../image/code.png";
import Typewritter from "typewriter-effect";
import trophy5 from "../image/Trophy3.png";
import trophy from "../image/AA2.png";
import trophy2 from "../image/BB.png";
import { FaPhoneAlt, FaEnvelope, FaPrint } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <div className="shapedividers_com-4654">
        <div className="container ">
          <nav className="navbar navbar-expand-lg " id="navbar">
            <div className="container-fluid ">
              <a className="navbar-brand" href="#">
                <h3>Code Arena</h3>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <a className="nav-link active" aria-current="page" href="#">
                      <h4>Home</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <h4>About Us</h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button id="login">
              <p className="btn-txt">Login </p>
              <div className="fill-container"></div>
              <span className="first"></span>
              <span className="second"></span>
              <span className="third"></span>
              <span className="fourth"></span>
            </button>
          </nav>
        </div>
      </div>

      {/* hero sec */}
      <div className="grad">
        <div className="container">
          <div className="box">
            <div className="container">
              <div className="row">
                <div className="col-md-6 title">
                  Code Arena
                  <div className="container">
                    <div className="bottom-text">
                      <div className="text">
                        <Typewritter
                          options={{
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            strings: [
                              "The enemy of reliability is complexity.",
                              "When in doubt, use brute force.",
                              "Deleted code is debugged code.",
                            ],
                          }}
                        />
                        <div id="para">
                          <span>
                            <div className="hero">
                              Join the competition and start competing with
                              fellow MBMite's today!
                            </div>

                            <div className="points">
                              We challenge YOU to participate in our contests
                              and become the best. We provide a safe and
                              supportive platform for students to improve their
                              programming skills.
                            </div>
                            <div>
                              <button id="register">
                                <p className="btn-txt">Register</p>
                                <span className="first"></span>
                                <span className="second"></span>
                                <span className="third"></span>
                                <span className="fourth"></span>
                              </button>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src={trophy5}
                    // height="2000"
                    // width="1500"
                    alt="Your image"
                    className="img-fluid"
                  />
                  <div className="image-footer">
                    Our mission is to help you improve yourself and land your
                    dream offer. In the past few years, our users have landed
                    jobs at top companies around the world.
                  </div>
                </div>
                 
              </div>
                
            </div>
          </div>
        </div>
      </div>

      {/* mid point */}
      <div className="container">
        <div className="star">
          How to become International Grandmaster, Guardian or 7 Star?
        </div>
      </div>
      <div className="container midpoint-main">
        <div className="box-m box-2" id="upsolving">
          <img
            src={trophy}
            // height="2000"
            // width="1500"
            alt="Your image"
            className="img-fluid img-fluid-2"
          />
          <div className="image-name">
            CodeArena - Participating in Contest..
          </div>
          <p className="boxh">
            <li>
              Contests provide a structured environment for programmers to test
              and improve their skills, solve problems under time pressure, and
              compare their performance against other participants.{" "}
            </li>
            <li>
              By participating in contests, you can also learn new programming
              concepts and techniques, as well as become familiar with different
              types of problems. Moreover, participating in contests can help
              you build a strong portfolio of coding accomplishments, which can
              be valuable for future job opportunities or academic pursuits.{" "}
            </li>
            <li>
              Overall, contests offer a valuable opportunity for programmers to
              sharpen their skills, learn new concepts, and gain recognition for
              their coding abilities.
            </li>
          </p>
        </div>
        <div className="box-m box-2" id="upsolving">
          <img
            src={trophy2}
            // height="2000"
            // width="1500"
            alt="Your image"
            className="img-fluid img-fluid-2"
          />
          <div className="image-name">
            Consistency - Analysing the problem..
          </div>
          <p className="boxh">
            {" "}
            <li>
              Consistently participating in coding contests helps in preparing
              for technical interviews. It builds problem-solving skills,
              improves accuracy and efficiency, and boosts confidence.{" "}
            </li>
            <li>
              It also helps to identify areas that require improvement, allows
              you to focus on specific topics that need more practice, and
              develops muscle memory for commonly used techniques and code
              snippets. Participating in coding contests simulates the interview
              experience, providing an opportunity to showcase your
              problem-solving skills and develop confidence in your abilities.
            </li>
            <li>
              {" "}
              Overall, consistent participation in coding contests helps to
              develop the problem-solving skills, accuracy, efficiency, and
              confidence necessary to perform well in technical interviews,
              making it an important aspect of interview preparation.
            </li>
          </p>
        </div>
        <div className="box-m box-1" id="upsolving">
          <img
            src={trophy2}
            // height="2000"
            // width="1500"
            alt="Your image"
            className="img-fluid img-fluid-2"
          />
          <div className="image-name">Upsolving - Breaking barrier..</div>
          <p className="boxh">
            <li>
              Upsolving after a coding contest helps in analyzing coding
              problems and preparing for technical interviews. It helps to
              identify gaps in understanding, reinforces coding concepts, and
              improves problem-solving skills.
            </li>
            <li>
              {" "}
              Additionally, it helps to build familiarity with common coding
              patterns and techniques and prepares for solving problems under
              time constraints in technical interviews. Solving problems after
              the contest also helps to identify the most efficient and
              effective solutions, allowing you to develop better
              problem-solving strategies.
            </li>
            <li>
              Overall, upsolving is an important aspect of continuous
              improvement and growth in competitive programming. It is an
              important aspect of continuous improvement and growth in the field
              of competitive programming.
            </li>
          </p>
        </div>
      </div>

      {/* conclusion              */}
      <div className="container text-cente">
        <h2 className="fear text-cente">
          CodeArena will help you overcome your fear of
          competitive programming..
        </h2>
        <h4 className="fear2">
          {" "}
          <i>
            "CodeArena is not just about winning contests, it's also about
            learning and improving your coding skills. So, even if you don't
            win, you'll still have gained valuable experience and knowledge that
            will help you in future coding challenges."
          </i>
        </h4>
      </div>
      <div className="container">
        <div className="inner row">
          <div className="col-sm-6" id="upsolving">
            <div className="image-name2">Coding Contest..</div>
            Welcome to our weekly competitive programming contest! Are you ready
            to put your coding skills to the test and compete against other
            talented programmers? <b>Every Tuesday</b>, we will be hosting a new
            contest with a variety of challenges designed to challenge your
            problem-solving abilities and push your coding skills to the limit..
          </div>
          <div className="col-sm-6" id="codingcontest">
            <img
              src={code}
              // height="2000"
              // width="1500"
              alt="Your image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* landing page */}
      <div style={{ backgroundImage: "url(/public/Background.jpg)" }}>
        <div style={{ backgroundColor: "#5d54b0" }}>
          <div className="container">
            <div className="row py-5 text-white">
              <div className="col-md-4 col-sm-12">
                <h4 className="text-warning">CodeArena</h4>
                <p>
                  In this section we should write about our company to introduce
                  your company or something else.
                </p>
              </div>
              <div className="col-md-3 col-sm-12">
                <h4 className="text-warning">Company</h4>
                {/* <p><Link className="footer-item text-white" to="/about" style={{ cursor: 'pointer', textDecoration: 'none' }}>About Us</Link></p>
                    <p><Link className="footer-item text-white" to="/about" style={{ cursor: 'pointer', textDecoration: 'none' }}>Careers</Link></p>
                    <p><Link className="footer-item text-white" to="/services" style={{ cursor: 'pointer', textDecoration: 'none' }}>Our Team</Link></p>
                    <p><Link className="footer-item text-white" to="/contact us" style={{ cursor: 'pointer', textDecoration: 'none' }}>Contact Us</Link></p>
                    <p><Link className="footer-item text-white" to="/privacy" style={{ cursor: 'pointer', textDecoration: 'none' }}>Privacy Policy</Link></p> */}
              </div>
              {/* <div className='col-md-3 col-sm-12'>
                    <h4 className='text-warning'>Useful Links</h4>
                    <p style={{ cursor: 'pointer' }}>Sitemap</p>
                    <p style={{ cursor: 'pointer' }}>Shipping Rates</p>
                    <p style={{ cursor: 'pointer' }}>Affililat Program</p>
                    <p style={{ cursor: 'pointer' }}>Affililat Program</p>
                </div> */}
              <div className="col-md-3 col-sm-12">
                <h4 className="text-warning">Address</h4>
                <FiMapPin className="me-2" />
                Vishakha <br />
                <FaPhoneAlt className="me-2" />
                9950980633 <br />
                <FaEnvelope className="me-2" />
                vishakhav043@gmail.com <br />
                <FaPrint className="me-2" />
                +9560438596 <br />
              </div>
            </div>
            <p className="text-white pb-5">
              @copyright Code With Yourself 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { DownArrow, Notification, Search } from "./Arrowsvg";
import Clock from "./Clock";
import MonthYear from "./Monthy";
import { Button, NavbarToggle, NavbarCollapse } from "react-bootstrap";

const TopNav = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-xxl navbar-light  rounded ">
      <button 
        className="custom-toggler navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span class="navbar-toggler-icon "></span>
      </button>

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
      >
        <a className="nav-link" href="">
          <div className="center-side-menu">
            <div className="menu-div col p-0 " href="#home">
              <ul className="head-ul p-0 gap-3 ">
                <a href="">
                  <li className="head-comp item-overview">Overview</li>
                </a>

                <a href="">
                  <li className="head-comp" href="#features">
                    Patient&nbsp;chart
                  </li>{" "}
                </a>
                <a href="">
                  <li className="head-comp" href="#Calendar">
                    Calendar
                  </li>
                </a>

                <a href="">
                  <li className="head-comp" href="#Doctors">
                    Doctors
                  </li>
                </a>

                <a href="">
                  <li className="head-comp" href="#Massages">
                    Massages
                  </li>
                </a>
              </ul>
            </div>
            {/* center menu */}

            <div className="col side-item-container ">
              <div className=" d-flex  justify-content-center align-items-center px-5 gap-3">
                <div className="Clock-box ">
                  <div>
                    <svg
                      className="clock-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      class="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                </div>

                <div className="time-div d-flex flex-row gap-2">
                  <div className=" d-flex flex-row e ">
                    <MonthYear />
                  </div>

                  <div className=" d-flex flex-row e">
                    <Clock />
                  </div>
                </div>
              </div>
              <div className="side-item-container d-flex gap-4 justify-content-center align-items-center  ">
                <div className=" d-flex gap-4 align-items-center  ">
                  <ul className="side-item-div d-flex -flex-row gap-2">
                    <li className="side-item d-flex align-items-center">
                      <Search />
                    </li>
                    <li className="side-item d-flex align-items-center">
                      <Notification />
                    </li>
                    <li className="side-item-p d-flex align-items-center gap-3  ">
                      <li className="down-arrow">
                        <DownArrow />
                      </li>
                      <li>
                        <div className=" profile-img-box">
                          <img
                            className="profile-img"
                            src={process.env.PUBLIC_URL + "/img/fds.jpg"}
                            alt=""
                          />
                        </div>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default TopNav;

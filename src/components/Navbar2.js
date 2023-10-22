import { useState } from "react";
import { DownArrow, Notification, Search } from "./Arrowsvg";
import Clock from "./Clock";
import MonthYear from "./Monthy";
import { Button, NavbarToggle, NavbarCollapse } from "react-bootstrap";
import TopNav from "./navbutton";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className="row m-0 p-2">
      <div className="header-div d-flex flex-row justify-content-between ">
        <div className="start-logo start-logo-flexs col p-2 px-3 d-flex flex-row  justify-content-between">
          <a href="app.js">
            {" "}
            <svg
              className="start-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="52"
              fill="currentColor"
              class="bi bi-heart-pulse"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z" />
              <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z" />
            </svg>
          </a>

          
        </div><div className="button-nav">
            <TopNav />
          </div>
        {/* end logo */}

        {/* center menu */}
        <div
          className="center-side-menu collapse-menu"
          id={showLinks ? "hidden" : ""}
        >
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
      </div>
      {/* start logo */}
    </div>
  );
}

export default Navbar;

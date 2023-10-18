import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { CardGroup, CardImg, CardImgOverlay, CardText } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Warning } from "./Arrowsvg";

function Labbox1() {
  return (
    <div className="lab-card">
      <div className="lab-body d-flex flex-column">
        <div className="d-flex flex-column gap-4">
          <div className="d-flex gap-3 align-items-center ">
            <div className="test-img-box">
              <img
                className="test-img"
                src={process.env.PUBLIC_URL + "/img/test-tube.png"}
                alt=""
              />
            </div>

            <Card.Title>LAB SCREENING</Card.Title>
          </div>

          <div className="d-flex flex-column gap-2">
            <Card.Subtitle className=" lab-date">
              29 AUGUST 2023
            </Card.Subtitle>
            <div>
              <h4>Blood screening; CPR, RF and ESR</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center p-4">
        <Warning />
      </div>
    </div>
  );
}

export default Labbox1;

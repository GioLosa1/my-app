import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import { Pdficon } from "./Arrowsvg";
function Info1() {
  return (
    <div className="d-flex flex-column gap-2  ">
      <div className="info-box">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="pdf-icon">
              <Pdficon />
            </div>
            <div className="d-flex align-items-center p-2">
              <p className="m-0">Note: How to prepare for surgery</p>
            </div>
          </div>

          <div className="pdf d-flex align-items-center p-2">PDF</div>
        </div>
      </div>

        <div className="info-box">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="pdf-icon">
              <Pdficon />
            </div>
            <div className="d-flex align-items-center p-2">
              <p className="m-0">PE during rehabilitation process</p>
            </div>
          </div>

          <div className="pdf d-flex align-items-center p-2">PDF</div>
        </div>
      </div>
      
      
      <div className="info-box">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="pdf-icon">
              <Pdficon />
            </div>
            <div className="d-flex align-items-center p-2">
              <p className="m-0">Knee joiny anatomy: Introduction</p>
            </div>
          </div>

          <div className="pdf d-flex align-items-center p-2">PDF</div>
        </div>
      </div>
    </div>
  );
}

export default Info1;

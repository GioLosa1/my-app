
import Card from "react-bootstrap/Card";
import React from "react";

import { Cart } from "./Arrowsvg";

function MedicBox1() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between p-2 align-items-center ">
        <h3>Medication</h3>

        <a style={{ textDecoration: "none" }} href="All resuldsas">
          Buy meds (6) &gt;{" "}
        </a>
      </div>

      <div className="med-container">
        <div className="med-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column px-2">
              <Card.Title className="m-0">Knee Orthosis</Card.Title>
              <Card.Text className="mb-2 text-muted">Fixing Device</Card.Text>
            </div>
            <div className="cart align-items-center pb-4 p-3">
              <Cart />
            </div>
          </div>
          <div className="img-body ">
            <img
              className="img-div"
              src={process.env.PUBLIC_URL + "/img/knee.jpg"}
              alt=""
            />
          </div>
        </div>
        <div className="med-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column px-2">
              <Card.Title className="m-0">Aceclofenac</Card.Title>
              <Card.Text className="mb-2 text-muted">Tablets - 100mg</Card.Text>
            </div>
            <div className="cart align-items-center pb-4 p-3">
              <Cart />
            </div>
          </div>
          <div className="img-body ">
            <img
              className="img-div"
              src={process.env.PUBLIC_URL + "/img/Acelo.jpg"}
              alt=""
            />
          </div>
        </div>
        <div className="med-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column px-2">
              <Card.Title className="m-0">Diclofenac</Card.Title>
              <Card.Text className="mb-2 text-muted">Ointment -2%</Card.Text>
            </div>
            <div className="cart align-items-center pb-4 p-3">
              <Cart />
            </div>
          </div>
          <div className="img-body ">
            <img
              className="img-div"
              src={process.env.PUBLIC_URL + "/img/Diclo.jpg"}
              alt=""
            />
          </div>
        </div>
        <div className="med-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column px-2">
              <Card.Title className="m-0">Heparin sodium</Card.Title>
              <Card.Text className="mb-2 text-muted">Gel -1.5%</Card.Text>
            </div>
            <div className="cart align-items-center pb-4 p-3">
              <Cart />
            </div>
          </div>
          <div className="img-body ">
            <img
              className="img-div"
              src={process.env.PUBLIC_URL + "/img/heparin.webp"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicBox1;

import Card from "react-bootstrap/Card";
import { Chaticon } from "./Arrowsvg";
import React from "react";

function Doccard() {
  return (
    <Card>
      <Card.Body className="p-4">
        <div className="d-flex flex-column gap-2">
          <Card.Subtitle className="mb-2 text-muted">
            DOCTOR IN CHARGE:
          </Card.Subtitle>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3">
              <img
                className="doctor-img"
                src={process.env.PUBLIC_URL + "/img/Brooklyn.jpg"}
                alt=""
              />

              <div className="d-flex justify-content-between align-items-center">
                <div className=" ">
                  <Card.Title>Brooklyn S. Simmons</Card.Title>

                  <Card.Text className="text-muted">
                    MD, Traumatologist-orthopedist
                  </Card.Text>
                </div>
              </div>
            </div>
            <div className="chat-icon">
              <Chaticon />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Doccard;

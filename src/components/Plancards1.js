import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { CardImg, ListGroup } from "react-bootstrap";
import {
  Calendar,
  Chaticon,
  DownArrow,
  LeftArrow,
  RightArrow,
} from "./Arrowsvg";

function Plan() {
  const cardinfo = [
    {
      type: 1,
      title: "MRI: right thigh, knee and shin",
      title2: "Ralph J. Edwards",
      subtitle: "SOON 12:30PM - 01:15 PM . Office visit ",
      subtitle2: " MD, Radiologist ",
    },
    {
      type: 2,
      title: "Consultation: surgery preparation",
      title2: "Kathryn D. Murphy",
      subtitle: "01:30PM - 02:20 PM . Office visit ",
      subtitle2: "MD, Orthopedic surgeon ",
    },
    {
      type: 3,
      title: "Consultation: physical rehabillitation before & after sugery",
      title: "Consultation: physical rehabillitation before & after sugery",
      title2: "Devon M. Lane",
      subtitle: "02:30PM - 03:30 PM . Office visit ",
      subtitle2: "MD, physiotherapist ",
    },
  ];

  const getType = (id) => {
    return types.find((item) => item.id === id);
  };

  const types = [
    {
      id: 1,
      img: "Ralph.jpg",
    },

    {
      id: 2,
      img: "Kathryn.jpg",
    },

    {
      id: 3,
      img: "Devon.jpg",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card key={index}>
        <Card.Body className="p-4">
          <Card.Subtitle className="mb-2 text-muted">
            {card.subtitle}
          </Card.Subtitle>
          <Card.Title>{card.title}</Card.Title>

          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <div className="doctorimg-box">
                <img
                  className="doctor-img"
                  src={
                    process.env.PUBLIC_URL + "/img/" + getType(card.type).img
                  }
                  alt=""
                />
              </div>
              <div className="doctor-names">
                <Card.Title className="d-flex flex-row justify-content-between">
                  {card.title2}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex flex-row justify-content-between">
                  {card.subtitle2}
                </Card.Subtitle>
              </div>
            </div>

            <div className="chat-icon">
              <Chaticon />
            </div>
          </div>

          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column align-items ">
            <div className="d-flex justify-content-between p-2 align-items-center ">
              <h3>Treatment plan</h3>

              <a className="fullt" style={{ color:"rgb(99, 163, 178)"  }} href="All resuldsas">
                Full treatment plan &gt;{" "}
              </a>
            </div>
            <div className="data-container d-flex justify-start-center align-items-center gap-5 px-3 ">
              <div className="date-slider p-2 ">
                <ListGroup className="d-flex flex-row  align-items-center gap-5">
                  <div className="arrow ">
                    <LeftArrow> </LeftArrow>{" "}
                  </div>
                  <p className="m-0">TODAY,&nbsp;AUGUST&nbsp;30</p>
                  <div className="arrow">
                    <RightArrow />{" "}
                  </div>
                </ListGroup>
              </div>
              <div className="data-scontainer d-flex justify-start-center align-items-center  px-1  ">
                <div className=" d-flex align-items-center justify-content-around gap-3 p-1">
                  <div className="calendar pb-1 m-1 ">
                    <Calendar />
                  </div>
                  <div className="arrow p-1">
                    <DownArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column  gap-3 p-3 ">
            {cardinfo.map(renderCard)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;

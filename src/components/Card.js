import Card from "react-bootstrap/Card";
import React, { useState } from "react";


function Card1() {
  const cardinfo = [
    {
      type: 1,
      title: "CONSULTATIONS",
      subtitle: "27 AUGUST 2023 ",
      text: "Initial examination",
      selected: false,
    },
    {
      type: 2,
      title: "PROTOCOLS",
      subtitle: "27 AUGUST 2023 ",
      text: "Ultrasound: right knee",
      selected: false,
    },
    
  ];

  const getType = (id) => {
    return types.find((item) => item.id === id);
  };

  const types = [
    {
      id: 1,
      img: "doctor.png",
    },

    {
      id: 2,
      img: "first-aid-kit.png",
    },

    {
      id: 3,
      img: "testing-tube.png",
      svg: "",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card className={card.selected ? "lab-card" : " "} key={index}>
        <Card.Body>
          <Card.Title className="d-flex align-item-center gap-1">
            <div className="icon-bg">
              <img
                className="icon-img"
                src={process.env.PUBLIC_URL + "/img/" + getType(card.type).img}
                alt=""
              />
            </div>

            {card.title}
          </Card.Title>

          <Card.Subtitle className="mb-2 text-muted ">
            
              {card.subtitle}
           
          </Card.Subtitle>
          <Card.Text>{card.text}</Card.Text>

        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-between p-2 align-items-center">
        <h3>Diagnostic results</h3>
        <a className="allr" style={{  color:"rgb(99, 163, 178)"  }} href="All resuls">
          All results &gt;{" "}
        </a>
      </div>

      <div className="result-cards">{cardinfo.map(renderCard)}</div>
    </div>
  );
}

export default Card1;

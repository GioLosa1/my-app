import Card from "react-bootstrap";
import React, { useState } from "react";


function Rightknee1() {
  return (
    
    <Card>
      <Card.Body>
        <div>
          <h2>Right knee</h2>
        </div>
        <Card.Subtitle className="mb-2 text-muted">
          Last update:{" "}
          <span style={{ color: "hsl(191.39deg 33.91% 54.31%)" }}>
            TODAY, 07;49AM{" "}
          </span>{" "}
        </Card.Subtitle>
        <hr />
        <div>
          <p>MAIN DIAGNOSIS:</p>
        </div>
        <Card.Text>
          <p className="diagnos">
            <span style={{ color:"#df6d59" }}>[S83.53]</span> Sprain and
            strain of knee: Tear of anterior cruciate ligament
          </p>
        </Card.Text>
      </Card.Body>
    </Card>


  );
}

export default Rightknee1;

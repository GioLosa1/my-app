import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card1 from "./Card";
import Plan from "./Plancards1";
import Rightknee1 from "./RightKnee";
import Doccard from "./Doctorcard";
import Info1 from "./Info";
import MedicBox1 from "./Medication";

const Rightsidebar1 = () => {
  return (
    <div className="rightsidebar ">
      <div className="d-flex flex-column">
        <div className="d-flex flex-column">
          <Rightknee1 />

          <div className="d-flex flex-column gap-3 ">
            <div>
              <Doccard />
            </div>

            <div className="d-flex flex-column gap-4">
              <div>
                <MedicBox1 />
              </div>
            </div>
            <div>
              <h3>Additional information</h3>
            </div>

            <div>
              <Info1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar1;

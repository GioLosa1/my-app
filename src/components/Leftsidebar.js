import React from "react";

import Card1 from "./Card";
import Plan from "./Plancards1";
import Labbox1 from "./Labscreen";

const Leftsidebar1 = () => {
  return (
    <div className="leftsidebar ">
      <div className="left-last d-flex flex-column gap-5">
        <div className="diag-container">
          <Card1></Card1>

          <Labbox1 />
        </div>

        <div>
          <Plan />
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar1;

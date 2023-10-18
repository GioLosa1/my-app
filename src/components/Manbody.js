import React from "react";

function Manbody1() {
  return (
    <div className="manbodyimgcont" style={{height: "100%", width: "678px", paddingTop: "50px"  }}>
      <img className="manbodyimg" style={{height: "100%", width: "100%", objectFit: "cover" }} src={process.env.PUBLIC_URL + "/img/man-body.png"} alt="manbody" />
    </div>
  );
}

export default Manbody1 

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import Navbar from "./components/Navbar2";

import Leftsidebar1 from "./components/Leftsidebar";
import Rightsidebar1 from "./components/Rightsidebar";
import Manbody1 from "./components/Manbody";

function App() {
  return (
    <div className="App">
      <div className="whole-body">
        
          <Navbar />
       

        <div className="body-items ">
          
            <div className="d-flex">
              <Leftsidebar1 />
            </div>

            <div className="manbody-img">
              <Manbody1 />
            </div>
            <div className="d-flex">
              <Rightsidebar1 />
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default App;

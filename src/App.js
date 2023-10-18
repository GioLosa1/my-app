
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import Navbar from "./components/Navbar2";
import Plancards from "./components/Plancards1";
import Leftsidebar1 from "./components/Leftsidebar";
import Rightsidebar1 from "./components/Rightsidebar";
import Manbody1 from "./components/Manbody";

function App() {
  return (
    <div className="App">
      <div className="whole-body">
        <div>
          <Navbar />
        </div>

        <div className="body-items ">
          
            <Leftsidebar1 />

            <div className="manbody-img">
              <Manbody1 />
            </div>

            <Rightsidebar1 />
          </div>
        </div>
      </div>
    
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";

import Navbar from "./common-components/Navbar";
import Footer from "./common-components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column justify-content-between">
        <div>
          <Navbar />
        </div>

        <RouterConfig />

        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

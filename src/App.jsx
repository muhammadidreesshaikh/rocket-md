import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
// import Header from "./layout/header";
import Footer from "./layout/footer";
import HomePage from "./pages/HomePage";

import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      {/* all components */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App

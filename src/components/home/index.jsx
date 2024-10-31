import Header from "../../layout/header";
import "../../assets/css/home.css";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="sec-banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>HORIZON STUDIO</h1>
              <p>LOS ANGELES,CA.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

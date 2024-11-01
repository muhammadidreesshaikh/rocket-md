import Header from "../../layout/header";
import "../../assets/css/home.css";

import image1 from "../../assets/img/banner-img.jpg";
import image2 from "../../assets/img/join1.jpg";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="sec-banner">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="content-side">
                <div className="join-bar">
                  <img src={image2} />
                  <img src={image2} />
                  <img src={image2} />
                  <h6>
                    Join <span>10,000+</span> weight loss patients!
                  </h6>
                </div>

                <div className="head-title">
                  <h2>
                    Achieve <span>lasting weight loss</span> with Semaglutide,
                    the same active ingredient as Ozempic®, Wegovy® and Saxenda®
                  </h2>
                </div>

                <div className="weight">
                  <h6>How much weight can you lose with GLP-1 meds?</h6>

                  <div className="weight-card">
                    <div className="row">
                      <div className="col-6">
                        <p>Enter your weight (in lbs):</p>

                        <form>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="100"
                          />
                        </form>
                      </div>

                      <div className="col-6">
                        <p>You could lose up to</p>
                        <h1>15 lbs</h1>
                      </div>
                    </div>
                  </div>

                  <p>
                    On average, RocketMD clients
                    <span> lose up to 15% of their weight</span> in a year or
                    less*
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="img-side">
                <img src={image1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

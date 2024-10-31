import "../assets/css/footer.css";

import image1 from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">

              <div className="logo">
                <a href="/homepage">
                  <img src={image1} />
                </a>
              </div>

              <div className="terms-policy">  
                <a href="/homepage">Terms Of Service</a> | <a href="/homepage">Privacy Policy</a>
              </div>

              <p>
                Results with RocketMD may vary. On average, users achieve a
                weight loss of 1-2 lbs per week within a 4-week timeframe by
                incorporating healthy dietary habits and exercise routines.
                Consult a healthcare professional before using RocketMD or
                starting any weight loss program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

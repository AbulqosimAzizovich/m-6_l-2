import { FC } from "react";
import AboutUs from "./../../components/UI/Icons/AboutUs";
import bir from "../../assets/Image/about.png";
import ikki from "../../assets/Image/about1.png";
import uch from "../../assets/Image/about2.png";

import "./about.scss";
import TopRight from "./../../components/UI/Icons/TopRight";
import AboutLogo from './../../components/UI/Icons/AboutLogo';
import Link from './../../components/UI/Icons/Link';
const About: FC = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <AboutUs />
          <div className="about__top">
            <div className="unlinear">
              <img src={bir} alt="Bir" />
            </div>
            <div className="linear">
              <TopRight />
              <p>shinam salon xavfsiz sayohat</p>
            </div>
          </div>

          <div className="about__bottom">
            <img src={ikki} alt="IKKI" />

            <div className="about__bottom--down">
              <AboutLogo />
              <Link />

              <img src={uch} alt="Uch" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

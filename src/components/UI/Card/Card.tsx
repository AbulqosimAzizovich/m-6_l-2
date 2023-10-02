// import { FC } from "react";
import Right from "../Icons/Right";

// interface PROPS {
//   title: string;
//   descritiption: string;
//   image: string;
//   link: string;
//   speed: string;
//   id: number;
// }

const Card = () => {
  return (
    <div className="models__card">
      <div className="models__card--left"></div>

      <div className="models__card--right">
        <p>190 km/s</p>
        <div className="m_link">
          <div>
            <h1>new urban supercar jetour</h1>
            <span>
              Our experienced technicians can diagnose and repair any issues
              with your car or big machine's engine.
            </span>
          </div>
          <button>
            <Right />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

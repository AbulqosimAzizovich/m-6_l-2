import { FC } from "react";
import "./models.scss";
import Modelstitle from "./../../components/UI/Icons/Modelstitle";
import Card from "../../components/UI/Card/Card";
import Rone from "./../../components/UI/Icons/Rone";

const Models: FC = () => {
  return (
    <section className="models">
      <div className="container">
        <div className="models__wrapper">
          <Modelstitle />

          <div>
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} />
            ))}
          </div>

          <div className="discover">
            <div className="d_up">
              <p>Discover</p>
              <Rone />
            </div>

            <div className="d_down">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;

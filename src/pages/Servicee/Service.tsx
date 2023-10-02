import { FC } from "react";
import "./service.scss";
import ServiceTitle from "./../../components/UI/Icons/ServiceTitle";
import ServiceCard from "../../components/UI/Card/ServiceCard";

const Service: FC = () => {
  return (
    <section className="service border-y-[1px] border-[#ccc] pt-5 pb-[80px]">
      <div className="container">
        <div className="service__wrapper">
          <ServiceTitle />

          <div className="all__card">
            {Array.from({ length: 5 }).map((_, index) => (
              <ServiceCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

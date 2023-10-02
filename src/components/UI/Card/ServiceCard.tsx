const ServiceCard = () => {
  return (
    <div className="service__card">
      <div className="first">
        <div className="service__dot"></div>
        <p>
          JETOUR avtomobil ishlab chiqarish bo‘yicha 20 yildan ortiq
          tajribagaega bo‘lgan taniqli kompaniya ...{" "}
        </p>
      </div>

      <div className="w-11 h-11 grid place-content-center rounded-lg bg-[#E6E6E6] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M1.68676 24.3137L24.3142 1.68629M24.3142 1.68629H1.68676M24.3142 1.68629V24.3137"
            stroke="#1A1A1A"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;

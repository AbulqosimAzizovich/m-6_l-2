import ft from "../../assets/Image/footer.png";

import "./Footer.scss";
import FooterLogo from "./../UI/Icons/FooterLogo";
const Footer = () => {
  return (
    <footer>
      <div className="max-w-[1480px] px-[20px] py-0 mx-auto">
        <div className="footer__wrapper">
          <div className="footer__top">
            <img src={ft} alt="Footer" />
            <form>
              <FooterLogo />
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-[12px] bg-[#E6E6E6] ps-5 py-3 outline-none border-none mt-[67px]"
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-[12px] bg-[#E6E6E6] ps-5 py-3 outline-none border-none mt-3"
              />
              <button>Yuborish</button>
            </form>
          </div>

          <div className="footer__bottom">
            <div className="footer__up">
              <p>Uzbekistan</p>
              <form action="">
                <input
                  type="text"
                  className="w-[165px] px-5 py-2 rounded-[20px] bg-[#fff] border-none outline-none"
                  placeholder="+(91) 033 30 03"
                />
                <input
                  type="text"
                  className="w-[401px] px-5 py-2 rounded-[20px] bg-[#fff] border-none outline-none"
                  placeholder="Toshkent sh. Sergeli 2-mavze, 5-metro bekati"
                />
                <input
                  type="text"
                  className="w-[278px] px-5 py-2 rounded-[20px] bg-[#fff] border-none outline-none"
                  placeholder="jetour.uzbekistan@gmail.com"
                />
              </form>
            </div>

            <div className="footer__down">
              <button>Facebook</button>
              <button>Instagram</button>
              <button>Telegram</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

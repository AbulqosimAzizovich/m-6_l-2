import { FC, lazy } from "react";

const Header = lazy(() => import ("./../components/Header/Header"))
const Intro = lazy(() => import("./Intro/Intro"));
const Models = lazy(() => import("./Models/Models"));
const Service = lazy(() => import("./Servicee/Service"));
const Footer = lazy(() => import("./../components/Footer/Footer"));
const About = lazy(() => import("./About/About"));

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <Models />
      <About />
      <Service />
      <Footer />
    </>
  );
};

export default Layout;

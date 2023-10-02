import { FC } from "react";
import Logo from "./../../components/UI/Icons/Logo";
import Play from "./../../components/UI/Icons/Play";
import Link from "./../../components/UI/Icons/Link";

const Intro: FC = () => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  // const toggleVideoPlayback = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //     console.log(isPlaying);
  //   }
  // };

  return (
    <section className="mt-[163px]">
      <div className="container mx-auto">
        <div className="flex items-center gap-x-[110px]">
          <Logo />
          <Play />
        </div>

        <div className="flex justify-center mt-[78px]">
          <video
            className="yt-bg-video d-sm-block d-none rounded-[12px]"
            preload="auto"
            width="1320"
            height="740"
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source
              src="https://cms.jetour-ru.com/file/video/1672814240_dashing_pc.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex items-center justify-end mt-[120px] gap-x-[231px]">
          <div>
            <p
              style={{ fontFamily: "Michroma" }}
              className="text-[#999] text-[48px] leading-[52px] capitalize"
            >
              <span className="text-[#1A1A1A]">JETOUR</span> Yuqori Didli <br />
              Insonlar Uchun
            </p>
          </div>
          <Link />
        </div>
      </div>
    </section>
  );
};

export default Intro;

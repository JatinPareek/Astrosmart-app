import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import TestimonialTwoContainer from "../components/TestimonialTwoContainer";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="w-full relative bg-color overflow-hidden flex flex-col items-end justify-start gap-[94px] leading-[normal] tracking-[normal] mq825:gap-[23px] mq1275:gap-[47px]">
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <TestimonialTwoContainer />
      <FrameComponent />
      <img
        className="w-full h-[680.5px] absolute !m-[0] right-[0px] bottom-[0.5px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/background.svg"
      />
      <Footer />
      <footer className="self-stretch bg-whitesmoke-200 flex flex-row items-start justify-between pt-[30px] pb-[30.2px] pr-[219px] pl-[159px] box-border max-w-full gap-[20px] z-[1] text-left text-lg text-color1 font-lato mq825:pl-[39px] mq825:pr-[54px] mq825:box-border mq1275:flex-wrap mq1275:justify-center mq1275:pl-[79px] mq1275:pr-[109px] mq1275:box-border">
        <div className="h-[100px] w-[1920px] relative bg-whitesmoke-200 hidden max-w-full" />
        <img
          className="h-[39.8px] w-[200px] relative z-[2]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[8.9px] px-0 pb-0 box-border max-w-full">
          <div className="relative tracking-[0.01em] font-medium z-[2]">
            copyright 2023 @Astrosmart all right reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

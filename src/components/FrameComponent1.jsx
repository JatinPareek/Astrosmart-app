import StayInTheLoop from "./StayInTheLoop";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[236px] box-border max-w-full text-left text-65xl text-color1 font-bricolage-grotesque mq825:pb-[99px] mq825:box-border mq1275:pb-[153px] mq1275:box-border ${className}`}
    >
      <div className="w-[1596px] flex flex-col items-start justify-start gap-[100px] max-w-full mq825:gap-[50px] mq450:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1575:flex-wrap">
          <div className="w-[800px] flex flex-row items-start justify-start relative min-w-[800px] max-w-full mq1275:min-w-full mq1575:flex-1">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq825:text-23xl mq450:text-6xl">
              Illuminating Minds with Astronomy Education
            </h1>
            <img
              className="w-[281.1px] !m-[0] absolute top-[-39px] left-[-45px] rounded-xl max-h-full object-contain z-[1]"
              alt=""
              src="/frame-4-3@2x.png"
            />
          </div>
          <div className="w-[626px] flex flex-col items-start justify-start pt-[128.5px] px-0 pb-0 box-border min-w-[626px] max-w-full text-lg text-color3 font-lato mq825:min-w-full mq1575:flex-1">
            <div className="self-stretch relative tracking-[0.02em] leading-[130%]">{`Lorem ipsum dolor sit amet consectetur. Eget lorem vulputate justo facilisis cursus volutpat dictumst risus ornare. Aliquet urna duis arcu mus. `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[90px] max-w-full text-29xl mq825:gap-[45px] mq450:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1575:flex-wrap">
            <StayInTheLoop
              star="/026star.svg"
              publicInterest=" Public Interest"
            />
            <StayInTheLoop
              star="/023badge.svg"
              publicInterest="Galactic Award"
              propMinWidth="355px"
              propFlex="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1575:flex-wrap">
            <StayInTheLoop
              star="/012trophy.svg"
              publicInterest="Scholar Award"
              propMinWidth="344px"
              propFlex="unset"
            />
            <StayInTheLoop
              star="/019medal.svg"
              publicInterest="Science Literacy"
              propMinWidth="251px"
              propFlex="1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

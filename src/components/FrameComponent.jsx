import EducatingContainer from "./EducatingContainer";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[329px] pr-5 pl-7 box-border max-w-full text-center text-35xl text-color1 font-bricolage-grotesque mq1275:pb-[139px] mq1275:box-border mq450:pb-[90px] mq450:box-border ${className}`}
    >
      <div className="w-[1604px] flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
        <EducatingContainer
          educatingThroughTheWonder="Eyes to the Sky Unlocking the Wonders of Astronomy"
          frame4="/frame-4-4@2x.png"
          propWidth="1276px"
          propWidth1="131.3px"
          propLeft="572px"
        />
        <div className="self-stretch flex flex-row items-start justify-center gap-[147px] max-w-full mq825:gap-[37px] mq1275:gap-[73px] mq450:gap-[18px] mq1575:flex-wrap">
          <div className="w-[721px] flex flex-col items-end justify-start gap-[60px] min-w-[721px] max-w-full mq825:gap-[30px] mq825:min-w-full mq1575:flex-1">
            <img
              className="self-stretch h-[682px] relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/mask-group-4@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[30px] pl-[31px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
                <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq825:text-24xl mq450:text-13xl">
                  Exploring the Cosmos - A Comprehensive Guide
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full text-lg font-lato">
                  <div className="flex-1 relative tracking-[0.02em] leading-[130%] inline-block max-w-full">{`Lorem ipsum dolor sit amet consectetur. Eget lorem vulputate justo facilisis cursus volutpat dictumst risus ornare. Aliquet urna duis arcu mus. `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[60px] min-w-[478px] max-w-full mq825:gap-[30px] mq825:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[7px] box-border max-w-full">
              <img
                className="h-[682px] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/mask-group-5@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq825:text-24xl mq450:text-13xl">
                Delving into the Mysteries of the Universe
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full text-lg font-lato mq825:pl-[27px] mq825:pr-[27px] mq825:box-border">
                <div className="flex-1 relative tracking-[0.02em] leading-[130%] inline-block max-w-full">{`Lorem ipsum dolor sit amet consectetur. Eget lorem vulputate justo facilisis cursus volutpat dictumst risus ornare. Aliquet urna duis arcu mus. `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[27px] pl-5 box-border max-w-full">
          <div className="w-[1062px] flex flex-row items-start justify-between gap-[20px] max-w-full mq825:flex-wrap mq825:justify-center">
            <button className="cursor-pointer [border:none] py-5 px-[43px] bg-color2 rounded-81xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-forestgreen">
              <b className="relative text-lg font-bold font-bricolage-grotesque text-color1 text-left inline-block min-w-[100px]">
                Learn more
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-5 px-[43px] bg-color2 rounded-81xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-forestgreen">
              <b className="relative text-lg font-bold font-bricolage-grotesque text-color1 text-left inline-block min-w-[100px]">
                Learn more
              </b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

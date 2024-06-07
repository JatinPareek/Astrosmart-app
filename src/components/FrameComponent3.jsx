import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[86px] box-border max-w-full text-left text-65xl text-color1 font-bricolage-grotesque mq825:pb-9 mq825:box-border mq1275:pb-14 mq1275:box-border ${className}`}
    >
      <div className="w-[1596px] flex flex-col items-start justify-start gap-[100px] max-w-full mq825:gap-[50px] mq450:gap-[25px]">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border relative max-w-full gap-[20px] mq1575:flex-wrap">
          <h1 className="m-0 w-[800px] relative text-inherit font-bold font-inherit inline-block shrink-0 min-w-[800px] max-w-full mq825:text-23xl mq1275:min-w-full mq450:text-6xl mq1575:flex-1">
            Illuminating Minds with Astronomy Education
          </h1>
          <div className="w-[626px] relative text-lg tracking-[0.02em] leading-[130%] font-lato text-color3 inline-block shrink-0 max-w-full">{`Lorem ipsum dolor sit amet consectetur. Eget lorem vulputate justo facilisis cursus volutpat dictumst risus ornare. Aliquet urna duis arcu mus. `}</div>
          <img
            className="h-[77.7px] w-[180.2px] !m-[0] absolute top-[-39px] left-[-45px] rounded-xl object-contain z-[1]"
            alt=""
            src="/frame-4-1@2x.png"
          />
        </div>
        <div className="self-stretch h-[960px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[60px] max-w-full text-81xl mq825:gap-[30px] mq1275:h-auto">
          <img
            className="self-stretch relative rounded-11xl max-w-full overflow-hidden max-h-full shrink-0"
            alt=""
            src="/jazz-concert.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-between shrink-0 gap-[20px] max-w-full mq1275:flex-wrap">
            <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq825:text-31xl mq450:text-11xl">
              Mobile Planetariums
            </h1>
            <img
              className="h-[54px] w-[54px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/guidanceleftarrow.svg"
            />
          </div>
          <img
            className="self-stretch relative rounded-11xl max-w-full overflow-hidden max-h-full shrink-0"
            alt=""
            src="/jazz-concert.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-between shrink-0 gap-[20px] max-w-full mq1575:flex-wrap">
            <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq825:text-31xl mq450:text-11xl">
              Curriculum Development
            </h1>
            <img
              className="h-[54px] w-[54px] relative overflow-hidden shrink-0"
              alt=""
              src="/guidanceleftarrow.svg"
            />
          </div>
          <img
            className="self-stretch relative rounded-11xl max-w-full overflow-hidden max-h-full shrink-0"
            alt=""
            src="/jazz-concert.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-between shrink-0 gap-[20px] max-w-full mq1275:flex-wrap">
            <h1 className="m-0 h-[120px] relative text-inherit font-bold font-inherit inline-block max-w-full mq825:text-31xl mq450:text-11xl">
              Astronomy Clubs
            </h1>
            <img
              className="h-[54px] w-[54px] relative overflow-hidden shrink-0"
              alt=""
              src="/guidanceleftarrow.svg"
            />
          </div>
          <img
            className="self-stretch relative rounded-11xl max-w-full overflow-hidden max-h-full shrink-0"
            alt=""
            src="/jazz-concert.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-between shrink-0 gap-[20px] max-w-full mq1275:flex-wrap">
            <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq825:text-31xl mq450:text-11xl">
              Public Outreach Events
            </h1>
            <img
              className="h-[54px] w-[54px] relative overflow-hidden shrink-0"
              alt=""
              src="/guidanceleftarrow.svg"
            />
          </div>
          <img
            className="self-stretch relative rounded-11xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/jazz-concert.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

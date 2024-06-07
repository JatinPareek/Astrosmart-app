import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1626px] flex flex-row items-start justify-center pt-0 px-5 pb-[86px] box-border max-w-full text-center text-65xl text-color1 font-bricolage-grotesque mq825:pb-9 mq825:box-border mq1275:pb-14 mq1275:box-border ${className}`}
    >
      <div className="w-[1306px] flex flex-col items-start justify-start gap-[124px] max-w-full mq825:gap-[31px] mq1275:gap-[62px] mq450:gap-[15px]">
        <div className="w-[1012px] flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq825:text-23xl mq450:text-6xl">
              Empowering Minds with Astronomy Education
            </h1>
            <img
              className="h-[77.9px] w-[185.2px] !m-[0] absolute top-[-39px] left-[413px] rounded-xl object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/frame-4@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg font-lato">
            <div className="w-[626px] relative tracking-[0.02em] leading-[130%] inline-block shrink-0 max-w-full">{`Lorem ipsum dolor sit amet consectetur. Eget lorem vulputate justo facilisis cursus volutpat dictumst risus ornare. Aliquet urna duis arcu mus. `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[1252px] flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[563px] flex-1 relative max-w-full overflow-hidden object-cover"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <img
              className="h-[433px] w-[465px] absolute !m-[0] top-[-74px] left-[-346px] object-cover z-[1]"
              alt=""
              src="/mask-group-3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;

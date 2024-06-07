import EducatingContainer from "./EducatingContainer";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[86px] pr-[23px] pl-5 box-border max-w-full text-center text-65xl text-color1 font-bricolage-grotesque mq825:pb-9 mq825:box-border mq1275:pb-14 mq1275:box-border ${className}`}
    >
      <div className="w-[1589px] flex flex-col items-end justify-start gap-[100px] max-w-full mq825:gap-[50px] mq450:gap-[25px]">
        <EducatingContainer
          educatingThroughTheWonder="Educating Through the Wonders of the Universe"
          frame4="/frame-4-2@2x.png"
        />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[80px_91.5px] min-h-[958px] max-w-full text-25xl text-color mq825:gap-[46px] mq450:gap-[23px]">
          <img
            className="w-[463px] relative rounded-11xl max-h-full object-contain max-w-full"
            loading="lazy"
            alt=""
            src="/vector-9@2x.png"
          />
          <div className="w-[464px] rounded-11xl flex flex-row items-start justify-start py-0 pr-0 pl-px box-border bg-[url('/public/vector-10@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <img
              className="self-stretch w-[463px] relative rounded-11xl max-h-full object-cover hidden min-h-[439px] max-w-full"
              alt=""
              src="/vector-10@2x.png"
            />
            <div className="h-[439px] flex-1 relative max-w-full">
              <img
                className="absolute top-[0px] left-[0px] rounded-11xl w-full h-full z-[1]"
                loading="lazy"
                alt=""
                src="/vector-101.svg"
              />
              <h1 className="m-0 absolute top-[193px] left-[157px] text-inherit font-bold font-inherit z-[2] mq825:text-16xl mq450:text-7xl">
                Harry J
              </h1>
            </div>
          </div>
          <img
            className="w-[463px] relative rounded-11xl max-h-full object-contain max-w-full"
            loading="lazy"
            alt=""
            src="/vector-10@2x.png"
          />
          <img
            className="w-[463px] relative rounded-11xl max-h-full object-contain max-w-full"
            loading="lazy"
            alt=""
            src="/vector-10@2x.png"
          />
          <img
            className="w-[463px] relative rounded-11xl max-h-full object-contain max-w-full"
            loading="lazy"
            alt=""
            src="/vector-10@2x.png"
          />
          <img
            className="w-[463px] relative rounded-11xl max-h-full object-contain max-w-full"
            loading="lazy"
            alt=""
            src="/vector-10@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

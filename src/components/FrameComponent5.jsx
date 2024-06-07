import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[86px] box-border max-w-full text-left text-75xl text-color font-bricolage-grotesque mq825:pb-9 mq825:box-border mq1275:pb-14 mq1275:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[60px] px-[162px] pb-[285px] box-border relative gap-[92px] max-w-full mq825:gap-[23px] mq825:pt-[25px] mq825:px-10 mq825:pb-[120px] mq825:box-border mq1275:gap-[46px] mq1275:pt-[39px] mq1275:px-[81px] mq1275:pb-[185px] mq1275:box-border">
        <header className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full z-[2] text-left text-13xl text-color font-bricolage-grotesque">
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <img
              className="h-[61px] w-[64.1px] relative"
              loading="lazy"
              alt=""
              src="/group-7.svg"
            />
            <a className="[text-decoration:none] relative font-bold text-[inherit] whitespace-nowrap">
              Astrosmart
            </a>
          </div>
          <nav className="m-0 w-[483px] flex flex-row items-start justify-start gap-[39.6px] max-w-full text-center text-lg text-color font-lato mq825:gap-[20px] mq1275:hidden">
            <div className="relative tracking-[0.02em] leading-[29px] inline-block min-w-[50px] shrink-0">
              Home
            </div>
            <div className="relative tracking-[0.02em] leading-[29px] inline-block min-w-[77px] whitespace-nowrap shrink-0">
              About Us
            </div>
            <div className="relative tracking-[0.02em] leading-[29px] inline-block min-w-[69px] shrink-0">
              Services
            </div>
            <div className="relative tracking-[0.02em] leading-[29px] inline-block min-w-[37px] shrink-0">
              Blog
            </div>
            <div className="relative tracking-[0.02em] leading-[160%] inline-block min-w-[92px] whitespace-nowrap shrink-0">
              Contact Us
            </div>
          </nav>
          <div className="w-[239px] flex flex-row items-center justify-start gap-[50px] text-lg font-lato mq825:hidden">
            <div className="relative leading-[140%] inline-block min-w-[43px]">
              Login
            </div>
            <button className="cursor-pointer [border:none] py-[15px] px-[39px] bg-color2 rounded-21xl flex flex-row items-center justify-center hover:bg-forestgreen">
              <b className="relative text-lg leading-[140%] font-bold font-lato text-gray text-left inline-block min-w-[68px]">
                Register
              </b>
            </button>
          </div>
        </header>
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/hero-inner-wrapper.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[1920px] h-[779.7px] z-[1]"
            alt=""
            src="/header.svg"
          />
          <img
            className="absolute top-[366px] left-[1120px] w-[637.5px] h-[488.5px] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
          <img
            className="absolute top-[256px] left-[1008px] w-[366px] h-[274px] object-cover z-[3]"
            alt=""
            src="/mask-group-1@2x.png"
          />
        </div>
        <div className="w-[815px] flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[22px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[2] mq825:text-28xl mq450:text-9xl">
              Navigating the Universe through Astronomy
            </h1>
            <div className="w-[626px] relative text-lg tracking-[0.02em] leading-[130%] font-lato inline-block max-w-full z-[2]">{`Lorem ipsum dolor sit amet consectetur. Eget lorem vulputate justo facilisis cursus volutpat dictumst risus ornare. Aliquet urna duis arcu mus. `}</div>
          </div>
          <button className="cursor-pointer [border:none] py-5 px-[42px] bg-color2 rounded-81xl flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-forestgreen">
            <b className="relative text-lg font-bold font-bricolage-grotesque text-color1 text-left inline-block min-w-[102px]">
              Get Started
            </b>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;

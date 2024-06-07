import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-color font-bricolage-grotesque ${className}`}
    >
      <div className="w-[1596px] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq1575:flex-wrap mq1575:justify-center">
        <div className="w-[321px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[15px]">
              <img
                className="h-[61px] w-[64.1px] relative"
                alt=""
                src="/group-7.svg"
              />
              <h2 className="m-0 relative text-inherit font-bold font-inherit mq825:text-7xl mq450:text-lgi">
                Astrosmart
              </h2>
            </div>
          </div>
          <p className="m-0 self-stretch relative text-lg tracking-[0.02em] font-dm-sans text-whitesmoke-100">
            Lorem ipsum dolor sit amet consectetur. Porttitor diam mauris
          </p>
        </div>
        <div className="w-[1193.5px] flex flex-col items-start justify-start max-w-full text-whitesmoke-100">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <b className="relative tracking-[0.01em] leading-[45px] font-bold inline-block min-w-[78px] mq825:text-7xl mq825:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                Page
              </b>
              <div className="flex flex-col items-start justify-start gap-[15px] text-lg font-lato">
                <a className="[text-decoration:none] relative tracking-[0.02em] text-[inherit] inline-block min-w-[77px]">
                  About Us
                </a>
                <a className="[text-decoration:none] relative tracking-[0.02em] text-[inherit] inline-block min-w-[69px]">
                  Services
                </a>
                <div className="relative tracking-[0.02em] inline-block min-w-[63px]">
                  Mentor
                </div>
                <div className="relative tracking-[0.02em] inline-block min-w-[37px]">
                  Blog
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full mt-[-208px]">
              <div className="!m-[0] absolute top-[0px] left-[159.5px] flex flex-col items-start justify-start gap-[30px]">
                <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[45px] font-bold font-inherit inline-block min-w-[84px] mq825:text-7xl mq825:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                  Links
                </h2>
                <div className="flex flex-col items-start justify-start gap-[15px] text-lg font-lato">
                  <div className="relative tracking-[0.02em] inline-block min-w-[96px]">
                    Term of use
                  </div>
                  <a className="[text-decoration:none] relative tracking-[0.02em] text-[inherit] inline-block min-w-[114px] whitespace-nowrap">
                    Privacy policy
                  </a>
                </div>
              </div>
              <div className="!m-[0] absolute top-[0px] left-[355px] flex flex-col items-start justify-start gap-[30px]">
                <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[45px] font-bold font-inherit mq825:text-7xl mq825:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                  Contact Us
                </h2>
                <div className="flex flex-col items-start justify-start gap-[15px] text-lg font-lato">
                  <div className="flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/call.svg"
                    />
                    <div className="relative tracking-[0.02em] whitespace-nowrap">
                      +21 8281 83713
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[18px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/message.svg"
                    />
                    <div className="relative tracking-[0.02em] whitespace-nowrap">
                      astrosmart@domain.com
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/mingcutelocationfill.svg"
                    />
                    <div className="relative tracking-[0.02em]">
                      Humanas Tower 6631, NJ USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-end max-w-full">
                <div className="w-[461px] flex flex-col items-start justify-start gap-[64px] max-w-full mq450:gap-[32px]">
                  <div className="w-[330px] flex flex-col items-start justify-start gap-[30px] max-w-full">
                    <b className="relative tracking-[0.01em] leading-[45px] font-bold mq825:text-7xl mq825:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                      Subscribe Us
                    </b>
                    <p className="m-0 self-stretch relative text-lg tracking-[0.02em] leading-[25px] font-lato">
                      Lorem ipsum dolor sit amet consectetur. Porttitor diam
                      mauris.
                    </p>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 rounded-tl-31xl rounded-tr-none rounded-br-none rounded-bl-31xl bg-color box-border flex flex-row items-start justify-start py-[13px] px-[29px] min-w-[174px] border-[1px] border-solid border-color">
                      <input
                        className="w-full [border:none] [outline:none] font-lato text-sm bg-[transparent] h-[25px] flex-1 relative tracking-[0.02em] leading-[25px] text-dimgray text-left inline-block min-w-[125px] p-0"
                        placeholder="Enter email address"
                        type="text"
                      />
                    </div>
                    <FrameComponent6
                      seeDetail="Subscribe"
                      frameDivBorderRadius="0px 50px 50px 0px"
                      frameDivBackgroundColor="#080a13"
                      frameDivBorder="none"
                      seeDetailFontFamily="'Bricolage Grotesque'"
                      seeDetailFontWeight="700"
                      seeDetailDisplay="inline-block"
                      seeDetailMinWidth="93px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

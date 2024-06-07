import PropTypes from "prop-types";

const TestimonialTwoContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[258px] pr-[21px] pl-5 box-border max-w-full text-center text-45xl text-color font-bricolage-grotesque mq825:pb-[168px] mq825:box-border ${className}`}
    >
      <div className="w-[1597px] flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-2.5">
          <img
            className="h-[90px] w-[121px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[799px] w-[1922px] absolute !m-[0] top-[-270px] right-[-163px] rounded-11xl"
            alt=""
            src="/speakers.svg"
          />
          <h1 className="m-0 flex-1 relative text-inherit tracking-[0.02em] font-medium font-inherit inline-block max-w-full z-[1] mq825:text-32xl mq450:text-19xl">
            Participating in the astronomy education program has been an
            enlightening journey for me. Through engaging workshops, insightful
            lectures, and hands-on experiences
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-5xl">
          <b className="h-[29px] relative tracking-[0.02em] inline-block z-[1] mq450:text-lgi">
            Ananda Anna
          </b>
        </div>
      </div>
    </section>
  );
};

TestimonialTwoContainer.propTypes = {
  className: PropTypes.string,
};

export default TestimonialTwoContainer;

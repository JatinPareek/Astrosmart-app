import { useMemo } from "react";
import PropTypes from "prop-types";

const StayInTheLoop = ({
  className = "",
  star,
  publicInterest,
  propMinWidth,
  propFlex,
}) => {
  const awardNamesOneStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propMinWidth, propFlex]);

  return (
    <div
      className={`w-[749px] rounded-181xl box-border flex flex-row items-start justify-start py-[78px] px-20 gap-[53px] max-w-full text-left text-29xl text-color1 font-bricolage-grotesque border-[1px] border-solid border-color1 mq825:flex-wrap mq825:gap-[26px] mq825:pl-10 mq825:pr-10 mq825:box-border ${className}`}
    >
      <img
        className="h-[150px] w-[150px] relative overflow-hidden shrink-0 mq825:flex-1"
        loading="lazy"
        alt=""
        src={star}
      />
      <div
        className="flex flex-col items-start justify-start pt-[46px] px-0 pb-0 box-border min-w-[353px] max-w-full mq825:flex-1 mq825:min-w-full"
        style={awardNamesOneStyle}
      >
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq825:text-19xl mq450:text-10xl">
          {publicInterest}
        </h1>
      </div>
    </div>
  );
};

StayInTheLoop.propTypes = {
  className: PropTypes.string,
  star: PropTypes.string,
  publicInterest: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default StayInTheLoop;

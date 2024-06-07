import { useMemo } from "react";
import PropTypes from "prop-types";

const EducatingContainer = ({
  className = "",
  educatingThroughTheWonder,
  frame4,
  propWidth,
  propWidth1,
  propLeft,
}) => {
  const contentFourContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameIconStyle = useMemo(() => {
    return {
      width: propWidth1,
      left: propLeft,
    };
  }, [propWidth1, propLeft]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px] box-border max-w-full text-center text-65xl text-color1 font-bricolage-grotesque ${className}`}
    >
      <div
        className="w-[1012px] flex flex-col items-start justify-start gap-[20px] max-w-full"
        style={contentFourContainerStyle}
      >
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq825:text-23xl mq450:text-6xl">
            {educatingThroughTheWonder}
          </h1>
          <img
            className="h-[76.9px] w-[165.2px] !m-[0] absolute top-[-39px] left-[413px] rounded-xl object-contain z-[1]"
            alt=""
            src={frame4}
            style={frameIconStyle}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg font-lato">
          <div className="w-[626px] relative tracking-[0.02em] leading-[130%] inline-block shrink-0 max-w-full">{`Lorem ipsum dolor sit amet consectetur. Eget lorem vulputate justo facilisis cursus volutpat dictumst risus ornare. Aliquet urna duis arcu mus. `}</div>
        </div>
      </div>
    </div>
  );
};

EducatingContainer.propTypes = {
  className: PropTypes.string,
  educatingThroughTheWonder: PropTypes.string,
  frame4: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propLeft: PropTypes.any,
};

export default EducatingContainer;

import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent6 = ({
  className = "",
  seeDetail,
  frameDivBorderRadius,
  frameDivBackgroundColor,
  frameDivBorder,
  seeDetailFontFamily,
  seeDetailFontWeight,
  seeDetailDisplay,
  seeDetailMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      borderRadius: frameDivBorderRadius,
      backgroundColor: frameDivBackgroundColor,
      border: frameDivBorder,
    };
  }, [frameDivBorderRadius, frameDivBackgroundColor, frameDivBorder]);

  const seeDetailStyle = useMemo(() => {
    return {
      fontFamily: seeDetailFontFamily,
      fontWeight: seeDetailFontWeight,
      display: seeDetailDisplay,
      minWidth: seeDetailMinWidth,
    };
  }, [
    seeDetailFontFamily,
    seeDetailFontWeight,
    seeDetailDisplay,
    seeDetailMinWidth,
  ]);

  return (
    <div
      className={`rounded-11xl bg-color4 flex flex-row items-start justify-start py-[15px] px-[50px] text-left text-[16px] text-color font-montserrat ${className}`}
      style={frameDivStyle}
    >
      <b
        className="relative tracking-[0.02em] leading-[25px]"
        style={seeDetailStyle}
      >
        {seeDetail}
      </b>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  seeDetail: PropTypes.string,

  /** Style props */
  frameDivBorderRadius: PropTypes.any,
  frameDivBackgroundColor: PropTypes.any,
  frameDivBorder: PropTypes.any,
  seeDetailFontFamily: PropTypes.any,
  seeDetailFontWeight: PropTypes.any,
  seeDetailDisplay: PropTypes.any,
  seeDetailMinWidth: PropTypes.any,
};

export default FrameComponent6;

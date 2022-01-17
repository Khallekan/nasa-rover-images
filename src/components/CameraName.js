import { useCallback, useState } from "react";

const CameraName = ({ name, full_name }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseOver = useCallback(() => {
    setIsTooltipVisible(true);
  }, [setIsTooltipVisible]);

  const handleMouseOut = useCallback(() => {
    setIsTooltipVisible(false);
  }, [setIsTooltipVisible]);

  return (
    <span
      onMouseOver={() => handleMouseOver()}
      onFocus={() => handleMouseOver()}
      onMouseOut={() => handleMouseOut()}
      onBlur={() => handleMouseOut()}
      className={`camera-container`}
    >
      {name}
      {isTooltipVisible && (
        <span className={`camera-tooltip`}>{full_name}</span>
      )}
    </span>
  );
};

export default CameraName;

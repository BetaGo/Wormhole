import React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

interface IIconFontProps {
  name: string;
}

const IconFont: React.FC<IIconFontProps & SvgIconProps> = (props) => {
  const { name, ...restProps } = props;
  return (
    <SvgIcon {...restProps}>
      <use xlinkHref={`#icon${name}`}></use>
    </SvgIcon>
  );
};

export default IconFont;

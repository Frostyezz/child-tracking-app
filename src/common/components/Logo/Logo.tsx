import React from "react";
import Image, { ImageProps } from "next/image";

type LogoProps = {
  size?: number;
} & Partial<ImageProps>;

const Logo: React.FC<LogoProps> = ({ size = 0.5, ...props }) => {
  return (
    <Image
      src="/images/logo.svg"
      alt="Safemode logo"
      priority
      width={165 * size}
      height={201 * size}
      {...props}
    />
  );
};

export default Logo;

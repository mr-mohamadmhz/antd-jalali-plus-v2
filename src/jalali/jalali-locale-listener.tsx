import React, { FC } from "react";
import useJalaliLocaleListener from "./jalali-locale-listener-hook";

const JalaliLocaleListener: FC = () => {
  useJalaliLocaleListener();
  return null;
};

export default JalaliLocaleListener;

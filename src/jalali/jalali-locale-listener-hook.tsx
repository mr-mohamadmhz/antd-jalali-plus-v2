import React, { useContext, useEffect } from "react";
import { ConfigProvider } from "antd";
import moment from "jalali-moment";

const useJalaliLocaleListener = () => {
  const { locale } = useContext(ConfigProvider.ConfigContext);

  useEffect(() => {
    if (locale?.locale === "fa") {
      moment.locale("fa");
    } else {
      moment.locale("en");
    }
  }, [locale]);
};

export default useJalaliLocaleListener;

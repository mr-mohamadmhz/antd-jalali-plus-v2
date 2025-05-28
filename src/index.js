import React from "react";
import { createRoot } from "react-dom/client";
import {
  DatePicker,
  Space,
  ConfigProvider,
  Row,
  Col,
  Radio,
  Typography,
  Card,
} from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
import {
  DatePicker as DatePickerJalali,
  Calendar,
  JalaliLocaleListener,
} from "./index.ts";
import moment from "jalali-moment";

import "./index.css";

const { Title } = Typography;

const App = () => {
  const [direction, setDirection] = React.useState("rtl");
  const [locale, setLocale] = React.useState(fa_IR);
  const [selectedDates, setSelectedDates] = React.useState({
    gregorian: "",
    jalali: "",
  });

  const changeDirection = e => {
    setDirection(e.target.value);
  };

  const changeLocale = e => {
    const newLocale = e.target.value;
    setLocale(newLocale);
  };

  const onJalaliChange = value => {
    if (!value) {
      setSelectedDates({ gregorian: "", jalali: "" });
      return;
    }

    const momentValue = moment(value);

    const gregorian = momentValue
      .clone()
      .locale("en")
      .format("YYYY-MM-DD dddd");

    const jalali = momentValue
      .clone()
      .locale("fa")
      .format("jYYYY-jMM-jDD dddd");

    setSelectedDates({ gregorian, jalali });
  };

  return (
    <Row justify="center" style={{ marginTop: 40 }}>
      <Col span={18}>
        <Space direction="vertical" size={24} style={{ width: "100%" }}>
          <Title level={2} style={{ textAlign: "center" }}>
            Ant-Design Jalali Date Picker Demo - V2
          </Title>

          <Space direction="horizontal" size={24} wrap>
            <div>
              <label style={{ marginRight: 8, fontWeight: "bold" }}>
                Change Direction:
              </label>
              <Radio.Group defaultValue={direction} onChange={changeDirection}>
                <Radio.Button key="ltr" value="ltr">
                  LTR
                </Radio.Button>
                <Radio.Button key="rtl" value="rtl">
                  RTL
                </Radio.Button>
              </Radio.Group>
            </div>

            <div>
              <label style={{ marginRight: 8, fontWeight: "bold" }}>
                Change Locale:
              </label>
              <Radio.Group defaultValue={locale} onChange={changeLocale}>
                <Radio.Button key="en" value={en_US}>
                  EN
                </Radio.Button>
                <Radio.Button key="fa" value={fa_IR}>
                  FA
                </Radio.Button>
              </Radio.Group>
            </div>
          </Space>

          <ConfigProvider locale={locale} direction={direction}>
            <JalaliLocaleListener />
            <Space direction="vertical" size={16} style={{ width: "100%" }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={8}>
                  <label
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    Gregorian Date Picker
                  </label>
                  <DatePicker style={{ width: "100%" }} />
                </Col>

                <Col xs={24} lg={8}>
                  <label
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    Jalali Date Picker
                  </label>
                  <DatePickerJalali
                    onChange={onJalaliChange}
                    style={{ width: "100%" }}
                  />
                </Col>

                <Col xs={24} lg={8}>
                  <label
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    Jalali Range Picker
                  </label>
                  <DatePickerJalali.RangePicker style={{ width: "100%" }} />
                </Col>
              </Row>

              <div style={{ marginTop: 24 }}>
                <label style={{ fontWeight: "bold" }}>Jalali Calendar</label>
                <Calendar fullscreen={false} />
              </div>

              <Card
                title="Selected Dates"
                size="small"
                style={{ marginTop: 24, backgroundColor: "#fafafa" }}
              >
                <p>
                  <strong>Gregorian:</strong> {selectedDates.gregorian || "-"}
                </p>
                <p>
                  <strong>Jalali:</strong> {selectedDates.jalali || "-"}
                </p>
              </Card>
            </Space>
          </ConfigProvider>
        </Space>
      </Col>
    </Row>
  );
};

const container = document.getElementById("container");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

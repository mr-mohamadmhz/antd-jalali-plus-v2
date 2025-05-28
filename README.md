# Ant Design Jalali/Shamsi DatePicker - v2

<<<<<<< HEAD
Welcome to **antd-jalali-plus-v2**, a fully-featured Jalali (Shamsi/Persian) DatePicker, RangePicker, and Calendar component set built on top of Ant Design v4 and v5. This package replaces the deprecated `jalali-moment` with `jalali-moment` for Jalali date handling and offers full RTL and localization support.
=======
# Ant-Design Jalali/Hijri DatePicker (Ant 4/5)
Ant Design Jalali/Shamsi calendar DatePicker and RangePicker (Support Ant design v5 and v4). [Day.js](https://github.com/iamkun/dayjs) and [jalali-moment](https://github.com/fingerpich/jalali-moment)
>>>>>>> 921c7d087f6c3359e7c3985c470b88f69b66a9b1

---

## 🌟 Project Overview

**antd-jalali-plus-v2** is a maintained and upgraded fork of the original [`antd-jalali`](https://www.npmjs.com/package/antd-jalali) package, which is no longer maintained. It ensures compatibility with the latest Ant Design versions, fixes RTL issues, and replaces the date management engine with `jalali-moment`.

This library supports React 16/17/18 and provides seamless integration for Persian date pickers alongside the Gregorian ones.

---

## 🛠️ Key Features

- Support for **Ant Design v5** and **v4**
- Jalali (Shamsi) calendar support using **jalali-moment**
- React 16, 17, and 18 compatible
- Full **RTL** support and localization for `fa_IR` and `en_US`
- Drop-in replacement components for Ant Design DatePicker, RangePicker, and Calendar
- Includes `<JalaliLocaleListener />` helper for locale synchronization

---

## 📦 Installation

For **Ant Design 5.x**:

```bash
npm install antd-jalali-plus-v2@^1.4.0
# or
yarn add antd-jalali-plus-v2@^1.4.0
For Ant Design 4.x:
```

```bash
Copy
Edit
npm install antd-jalali-plus-v2@^1.3.0
# or
yarn add antd-jalali-plus-v2@^1.3.0
Or simply install the latest version:
```

```bash
Copy
Edit
npm install antd-jalali-plus-v2
```

# or

yarn add antd-jalali-plus-v2
🚀 Quick Start

### Example usage integrating Gregorian and Jalali date pickers with localization and RTL support:

```tsx
Copy;
Edit;
import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider, DatePicker } from "antd";
import {
  DatePicker as DatePickerJalali,
  Calendar,
  JalaliLocaleListener,
} from "antd-jalali-plus-v2";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";

ReactDOM.render(
  <ConfigProvider locale={fa_IR} direction="rtl">
    <JalaliLocaleListener />
    <div style={{ padding: 24 }}>
      Gregorian DatePicker: <DatePicker />
      <br />
      <br />
      Jalali DatePicker: <DatePickerJalali />
      <br />
      <br />
      Jalali RangePicker: <DatePickerJalali.RangePicker />
      <br />
      <br />
      Jalali Calendar: <Calendar />
    </div>
  </ConfigProvider>,
  document.getElementById("root")
);
```
<<<<<<< HEAD
=======
### How to set value  
You should pass dayjs object with [jalali calendar](https://github.com/fingerpich/jalali-moment)
>>>>>>> 921c7d087f6c3359e7c3985c470b88f69b66a9b1

## 📅 Handling Dates with jalali-moment

This library uses jalali-moment for Jalali date support. Example for creating and passing dates:

```tsx
Copy
Edit
import moment from "jalali-moment";

// Create a Jalali date instance
const jalaliDate = moment("1403-01-01", "jYYYY-jMM-jDD");

// Pass it as defaultValue or value
<DatePickerJalali defaultValue={jalaliDate} />
<Calendar value={jalaliDate} />
```

<<<<<<< HEAD
To convert or format Jalali and Gregorian dates:

```tsx
Copy;
Edit;
const onChange = value => {
  const gregorian = moment(value).locale("en").format("YYYY-MM-DD");
  const jalali = moment(value).locale("fa").format("jYYYY-jMM-jDD");
  console.log({ gregorian, jalali });
};
```

## 🌍 Localization and RTL

Use Ant Design's ConfigProvider to set locale (fa_IR or en_US) and text direction (rtl or ltr).

Include <JalaliLocaleListener /> inside ConfigProvider to sync locale and calendar correctly.

Supports right-to-left layouts out of the box.

## 📖 API Overview

All components support props from Ant Design counterparts:

```
<DatePickerJalali />

<DatePickerJalali.RangePicker />

<Calendar />
```

These accept props such as defaultValue, value, onChange, disabledDate, etc.

## 🤝 Contribution & Maintenance

This package is actively maintained by Mohamad Mahzoun to keep the Jalali date picking experience up to date with Ant Design changes and community needs.

## 🧑‍💻 Author

Mohamad Mahzoun
GitHub: @mr-mohamadmhz

## 📄 License

This project is licensed under the MIT License — feel free to use it in personal and commercial projects.

Thank you for using antd-jalali-plus-v2!
If you have any questions or want to contribute, please open issues or pull requests on GitHub.
=======
You can read more information about daysjs jalali on [jalali-moment repo](https://github.com/fingerpich/jalali-moment).

## Contributors
<a href="https://github.com/mr-mohamadmhz">
<img src="https://github.com/mr-mohamadmhz.png" width="60px;"/></a></sub>
>>>>>>> 921c7d087f6c3359e7c3985c470b88f69b66a9b1

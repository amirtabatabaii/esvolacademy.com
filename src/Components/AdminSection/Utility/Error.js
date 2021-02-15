import { notification } from "antd";

export const openNotificationWithIcon = (
  type,
  message,
  description,
  duration
) => {
  notification[type]({
    message: message,
    description: description,
    duration: duration,
    top: 75,
  });
};

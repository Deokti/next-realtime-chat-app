import toast from "react-hot-toast";
import { NotificationProps } from "./notification.props";

export function notification({
  content,
  appearance,
}: NotificationProps): string {
  return toast(content, {
    duration: 1000,
    position: "bottom-right",
    style: {
      backgroundColor: appearance === "success" ? "#22C55E" : "#EF4444",
      color: "#fff",
      padding: "5px 10px",
    },
  });
}

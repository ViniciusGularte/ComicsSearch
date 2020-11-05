import { toast } from "react-toastify";

const NotificationManager = (type = "success", text = "") => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  switch (type) {
    case "success":
      return toast.success(text, options);
    case "warning":
      return toast.warning(text, options);
    default:
      break;
  }
};
export default NotificationManager;

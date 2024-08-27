import { toast } from "react-hot-toast";

const Toasty = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  warn: (message) => toast(message, { icon: "⚠️" }),
};

export default Toasty;

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => (
  <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    draggable
    pauseOnHover
  />
)

export default Toast
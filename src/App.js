import Routes from "./routes";
import GlobalStyle from "./Styles/global";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <Routes />;
    </>
  );
}

export default App;

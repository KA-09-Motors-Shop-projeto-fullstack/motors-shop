import Routes from "./routes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Routes />
    </div>
  );
}

export default App;

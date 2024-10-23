import AppRoutes from "./src/Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <main role="main">
        <AppRoutes />
        <ToastContainer
          position="bottom-left"
          theme="dark"
        />
      </main>
    </>
  );
}

export default App

import { BrowserRouter } from "react-router-dom";
import Views from "./Layouts/Views";
import AuthProvider from "./Utilities/Contexts/AuthProvider/AuthProvider";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./Sass/style.css";
import { Provider } from "react-redux";
import store from "Utilities/Store/store";
import { loadUser } from "Utilities/Actions/Auth";

const App = () => {
  AOS.init({
    once: false,
  });

  // Validate token by calling load profile API.
  if (localStorage.token) {
    store.dispatch(loadUser());
  }

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <Views />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;

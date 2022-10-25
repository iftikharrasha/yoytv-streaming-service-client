import { useEffect } from "react";
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
import { LOADING_STOP } from "Utilities/Actions/types";
import { Helmet } from 'react-helmet-async';
import useUserApi from "./Utilities/Hooks/useLandingApi";

const App = () => {
  const { landingData } = useUserApi();
  AOS.init({
    once: false,
  });

  // useEffect(() => {
  //   // Validate token by calling load profile API.
  //   if (localStorage.token) {
  //     const state = store.getState();
  //     if (!state.auth.isAuthenticated) {
  //       store.dispatch(loadUser());
  //     } else {
  //       store.dispatch({ type: LOADING_STOP });
  //     }
  //   } else {
  //     store.dispatch({ type: LOADING_STOP });
  //   }
  // }, []);

  if (localStorage.token) {
    const state = store.getState();
    if (!state.auth.isAuthenticated) {
      store.dispatch(loadUser());
    }
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Helmet>
          <link rel="icon" href={landingData?.site_icon} />
        </Helmet> 
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

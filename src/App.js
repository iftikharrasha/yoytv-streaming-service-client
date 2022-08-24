import { BrowserRouter } from 'react-router-dom';
import Views from './Layouts/Views';
import AuthProvider from './Utilities/Contexts/AuthProvider/AuthProvider';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './Sass/style.css';

function App() {
  AOS.init({
    once: false,
  });

  return (
    <div className="App">
        <BrowserRouter>
            <AuthProvider>
              <Views/>
            </AuthProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Views from './Layouts/Views';
import './Sass/style.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Views/>
        </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//Css And JS

import Index from './pages';
import Navigation from './components/navigation';
import Banner from './components/banner';

function App() {
  return (
    <div className="App">
      <div id="preloder">
        <div class="loader"></div>
    </div>
    <Navigation/>
    <Index />
    </div>
  );
}

export default App;

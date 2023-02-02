import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home'
import Network from './components/networks/network'
import Jobs from './components/jobs/jobs';
import Notification  from "./components/notifications/notification";


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <Home />
      </div>
    </div>
  );
}

export default App;

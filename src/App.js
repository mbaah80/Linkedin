import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/Home'
import Network from './components/networks/network'
import Jobs from './components/jobs/jobs';
import Notification  from "./components/notifications/notification";
import Header from  './components/headers/header'


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <div className="container-fluid">
              {/*<Header />*/}
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/network" element={<Network/>}/>
                  <Route path="/jobs" element={<Jobs/>}/>
                  <Route path="/notification" element={<Notification/>}/>
              </Routes>
          </div>

        </div>
      </BrowserRouter>
  );
}

export default App;

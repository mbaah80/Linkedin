import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home'
import Network from './components/networks/network'
import Jobs from './components/jobs/jobs';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <Jobs />
      </div>
    </div>
  );
}

export default App;

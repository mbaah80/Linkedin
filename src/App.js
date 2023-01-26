import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home'
import Network from './components/networks/network'


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <Network />
      </div>
    </div>
  );
}

export default App;

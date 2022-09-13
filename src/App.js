import { Outlet } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;

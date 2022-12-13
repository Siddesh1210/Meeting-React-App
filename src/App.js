import './App.css';
import {Route,Routes,Link} from 'react-router-dom';
import FrontPage from './Components/FrontPage';

import AddMeet from './Components/AddMeet';
import ShowPage from './Components/ShowPage';
function App() {
  return (
    <div>
      <navbar className="nav-link">
        <Link to="/" className='page-link'><div className='logo'><h3><i class="bi bi-window-dock"></i><span className='logo-head'> V-Meet</span></h3></div></Link>
        <div>
          <ul className='ul-link'>
            <Link to="/" className='page-link'><li>Home</li></Link>
            <Link to="your-meet" className='page-link'><li>Meeting</li></Link>
            <Link to="add-meet" className='page-link'><li>Add Meeting</li></Link>
          </ul>
        </div>
      </navbar>

      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/your-meet" element={<ShowPage/>} />
        <Route path="/add-meet" element={<AddMeet/>} />
      </Routes>

    </div>
  );
}

export default App;

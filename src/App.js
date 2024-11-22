import './App.css';
import Profile from './componets/Profile/Profile';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Dialogs from './componets/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      <Routes>

        <Route path='/dialogs' element={<Dialogs />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Profile from './componets/Profile/Profile';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Dialogs from './componets/Dialogs/Dialogs';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      <Routes>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/dialogs' element={<Dialogs />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/music' element={<Music />}/>
        <Route path='/setting' element={<Settings />}/>
        
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

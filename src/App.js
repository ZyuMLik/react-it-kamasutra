import './App.css';
import Profile from './componets/Profile/Profile';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;

import './App.css';
import Profile from './componets/Profile';
import Header from './componets/Header';
import Navbar from './componets/Navbar';

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

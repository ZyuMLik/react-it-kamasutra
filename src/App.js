import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
      <img src="https://avatars.mds.yandex.net/i?id=cf680d155f6247581bb9db4cba703f74_sr-9072244-images-thumbs&n=13" alt="Image"></img>
      </header>
      <nav className="nav">
        <div>
          <a href="#"> Profile </a>
        </div>
        <div>
          <a href="#"> Messages </a>
        </div>
        <div>
          <a href="#"> News </a>
        </div>
        <div>
          <a href="#"> Music </a>
        </div>
        <div>
          <a href="#"> Settings </a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://avatars.mds.yandex.net/i?id=679720f2a94327342bb6a0e160ce7bb8_l-8497208-images-thumbs&n=13"></img>
        </div>
        <div>
          ava + discription
        </div>
        <div>
          My post
          <div>new post</div>
        </div>
        <div>
          <div>
            post1
          </div>
          <div>
            post2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

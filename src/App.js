import './App.css';
import Header from './components/header/header';
import Messages from './components/messages/messages';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <div className='content'>
        <Profile name="Elon Musk"/>
        <Messages/>
      </div>
    </div>
  );
}

export default App;

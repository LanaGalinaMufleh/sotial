import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Messages from './components/messages/messages';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';

function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <div className='content'>
        <Routes>
        <Route exact path='/' element={<Profile profilePage={props.state.profilePage}/>}/>
        <Route exact path='/profile' element={<Profile profilePage={props.state.profilePage}/>}/>
        <Route exact path='/messages' element={<Messages dialogesPage={props.state.dialogesPage} /> } />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

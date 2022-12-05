import './App.css';
import 'semantic-ui-css/semantic.min.css'
import PokeHeader from './components/header';
import NavBar from './components/navbar';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className='App'>
      <PokeHeader name={'Super Team'} />
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/Login' element={<Login/>} />
        


      </Routes>

      
    </div>
    
  );
}

export default App;

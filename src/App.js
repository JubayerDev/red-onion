import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Pages/Breakfast/Breakfast';
import Dinners from './Pages/Dinners/Dinners';
import Home from './Pages/Home/Home';
import Lunchs from './Pages/Lunchs/Lunchs'
import Navbar from './Pages/Navbar/Navbar';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={ <Breakfast />}/>
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='lunch' element={<Lunchs />} />
          <Route path='dinner' element={ <Dinners />}/>
        </Route >
        <Route path='/signup' element={ <Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
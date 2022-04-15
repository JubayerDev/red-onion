import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Pages/Breakfast/Breakfast';
import Home from './Pages/Home/Home';
import Lunchs from './Pages/Lunchs/Lunchs'
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='breakfast' element={ <Breakfast />}/>
          <Route path='lunch' element={ <Lunchs />}/>
        </Route >
      </Routes>
    </div>
  );
}

export default App;
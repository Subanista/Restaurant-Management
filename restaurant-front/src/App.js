
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import AddRestaurant from './restaurants/AddRestaurant';
import EditRestaurant from './restaurants/EditRestaurant';
import ViewRestaurant from './restaurants/ViewRestaurant';
import FindAll from './restaurants/FindAll';
<<<<<<< HEAD

=======
import StarRating from './StarRating';
>>>>>>> 352a5f782f352976475aa3850006bf1dfe5d5021

function App() { 
  return (
    <div className="App">
      
      
    
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/> }/>
        <Route exact path="/AddRestaurant" element={<AddRestaurant/>}/>
        <Route exact path="/EditRestaurant/:id" element={<EditRestaurant/>}/>
        <Route exact path="/ViewRestaurant/:id" element={<ViewRestaurant/>}/>
        <Route exact path="/FindAll" element={<FindAll/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;

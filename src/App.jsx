import './App.css'
import Error404 from './Components/Error404/Error404';
import Header from './Components/Header/Header'
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Review from './Components/Review/Review';
import Shipment from './Components/Shipment/Shipment';
import Shop from './Components/Shop/Shop'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UserContext } from './Components/Context/Context';
import { useState } from 'react';
import PrivateOutlet from './Components/PrivateOutlet/PrivateOutlet';


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <h3>Email: {loggedInUser.email}</h3>
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/review' element={<Review />}></Route>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/product/:productKey' element={<ProductDetail />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/*' element={<PrivateOutlet />}>
              <Route path='shipment' element={<Shipment />}></Route>
              <Route path='inventory' element={<Inventory />}></Route>
            </Route>
            <Route path='*' element={<Error404 />}></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App;

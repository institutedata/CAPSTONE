import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from '../src/pages/Loading/loading';
import Home from '../src/pages/Home/home';
import Wildlife from '../src/pages/Wildlife/wildlife';
import Services from '../src/pages/Services/services';
import Story from '../src/pages/Story/story';
import Cam from '../src/pages/Cam/cam';
import Rainforest from '../src/pages/Rainforest/rainforest';
import Africa from '../src/pages/Africa/africa'
import SouthAmerica from '../src/pages/South America/southAmerica';
import Booking from '../src/pages/Booking/booking';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/services" element={<Services />} />
        <Route path="/story" element={<Story />} />
        <Route path="/cam" element={<Cam />} />
        <Route path="/rainforest" element={<Rainforest />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/southamerica" element={<SouthAmerica />} />
        <Route path="/booking" element={<Booking />} />
        
      </Routes>
    </Router>
  );
}

export default App;

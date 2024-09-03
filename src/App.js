import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Home1 } from './component/Home1';
import { Property } from './component/Property';
import { Agent } from './component/Agent';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/Agent" element={<Agent />} />
      <Route path="/About" element={<About />} />
      <Route path="/Property" element={<Property />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </div>
  );
}

export default App;

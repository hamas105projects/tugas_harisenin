import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/auth';
import Homepage from './pages/homepage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  </Router>
);

export default App;
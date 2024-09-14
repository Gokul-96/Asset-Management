import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './pages/Login';
import Register from './pages/Register'; 
import Navbar from './components/Navbar';
import { useAuthStore } from './hooks/useAuthStore';

function App() {
  const { user } = useAuthStore();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" />:<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
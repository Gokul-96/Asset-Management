import { useState } from 'react';
import { useAuthStore } from '../hooks/useAuthStore';
import { supabase } from '../services/supabase';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data: { user }, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      alert(error.message);
    } else {
      setUser(user);
      navigate('/dashboard'); 
    }
  };

  return (
    <div>
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>

<p>Don't have an account? <Link to="/register">Register here</Link></p>
</div>  
);
};

export default Login;
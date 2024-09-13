import { useAuthStore } from '../hooks/useAuthStore';
import { supabase } from '../services/supabase';

const Profile = () => {
  const { user, clearUser } = useAuthStore();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    clearUser();
  };

  if (!user) return <p>You are not logged in.</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
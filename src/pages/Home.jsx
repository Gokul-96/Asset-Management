import { useAuthStore } from '../hooks/useAuthStore';

const Home = () => {
  const { user } = useAuthStore();

  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      <p>This is the home page after login.</p>
    </div>
  );
};

export default Home;
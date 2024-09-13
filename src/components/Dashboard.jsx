import AssetTable from './AssetTable';
import AssetForm from './AssetForm';

const Dashboard = () => {
  return (
    <div>
      <h1>Asset Management Dashboard</h1>
      <AssetForm />
      <AssetTable />
    </div>
  );
};

export default Dashboard;
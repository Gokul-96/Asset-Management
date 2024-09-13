import { useQuery } from '@tanstack/react-query';
import { supabase } from '../services/supabase';

const fetchAssets = async () => {
  const { data, error } = await supabase.from('assets').select('*');
  if (error) throw new Error(error.message);
  return data;
};

const AssetTable = () => {
  const { data: assets, error, isLoading } = useQuery(['assets'], fetchAssets);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <tr key={asset.id}>
            <td>{asset.name}</td>
            <td>{asset.type}</td>
            <td>{asset.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetTable;

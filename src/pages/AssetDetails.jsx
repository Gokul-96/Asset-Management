import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../services/supabase';

const AssetDetails = () => {
  const { id } = useParams();

  const { data: asset, error, isLoading } = useQuery(['asset', id], async () => {
    const { data, error } = await supabase.from('assets').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading asset details</div>;

  return (
    <div>
      <h1>Asset Details</h1>
      <p>Name: {asset.name}</p>
      <p>Description: {asset.description}</p>
      <p>Value: {asset.value}</p>
    </div>
  );
};

export default AssetDetails;
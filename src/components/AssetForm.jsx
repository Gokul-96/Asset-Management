import { useState } from 'react';
import { supabase } from '../services/supabase';

const AssetForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('assets').insert([{ name, type, details }]);
    if (error) {
      alert(error.message);
    } else {
      alert('Asset added successfully!');
      setName('');
      setType('');
      setDetails('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} required />
      <input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} required />
      <button type="submit">Add Asset</button>
    </form>
  );
};

export default AssetForm;
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCrypto, simulateUpdate } from './features/crypto/cryptoSlice';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());

    const interval = setInterval(() => {
      dispatch(simulateUpdate());
    }, 2000); // Simulate every 2 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>📊 Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;

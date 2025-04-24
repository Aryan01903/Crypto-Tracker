import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css'; // Optional styling file

const formatPercent = (value) => {
  const color = value >= 0 ? 'green' : 'red';
  return <span style={{ color }}>{value?.toFixed(2)}%</span>;
};

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th><th>Logo</th><th>Name</th><th>Symbol</th><th>Price</th><th>1h %</th><th>24h %</th><th>7d %</th><th>Market Cap</th><th>24h Volume</th><th>Circulating</th><th>Max Supply</th><th>7D Chart</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset, index) => (
          <tr key={asset.id}>
            <td>{index + 1}</td>
            <td><img src={asset.image} alt={asset.name} width="20" /></td>
            <td>{asset.name}</td>
            <td>{asset.symbol.toUpperCase()}</td>
            <td>${asset.current_price.toLocaleString()}</td>
            <td>{formatPercent(asset.price_change_percentage_1h_in_currency)}</td>
            <td>{formatPercent(asset.price_change_percentage_24h_in_currency)}</td>
            <td>{formatPercent(asset.price_change_percentage_7d_in_currency)}</td>
            <td>${asset.market_cap.toLocaleString()}</td>
            <td>${asset.total_volume.toLocaleString()}</td>
            <td>{asset.circulating_supply?.toLocaleString()}</td>
            <td>{asset.max_supply?.toLocaleString() || '—'}</td>
            <td>
              <svg width="100" height="30" viewBox="0 0 100 30" preserveAspectRatio="none">
              {asset.sparkline_in_7d?.price?.map((price, i, arr) => {
              if (i === 0) return null;
              const max = Math.max(...arr);
              const min = Math.min(...arr);
              const x1 = ((i - 1) / (arr.length - 1)) * 100;
              const x2 = (i / (arr.length - 1)) * 100;
              const y1 = 30 - ((arr[i - 1] - min) / (max - min)) * 30;
              const y2 = 30 - ((price - min) / (max - min)) * 30;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
              );
            })}
            </svg>
          </td>

        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;

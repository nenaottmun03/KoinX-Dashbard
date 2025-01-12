// Koinx Dashboard Final React.js Code

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);

  // Fetch Bitcoin Price and Trending Coins
  useEffect(() => {
    fetch('/api/bitcoin')
      .then(response => response.json())
      .then(data => setBitcoinData(data.bitcoin));

    fetch('/api/trending')
      .then(response => response.json())
      .then(data => setTrendingCoins(data.coins.slice(0, 3)));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <CryptoInfo bitcoinData={bitcoinData} />
        <PerformanceFundamentals bitcoinData={bitcoinData} />
        <TradingViewChart />
        <MarketSentiment />
        <Tokenomics />
        <TeamInfo />
        <TrendingCoins trendingCoins={trendingCoins} />
        <YouMayAlsoLike trendingCoins={trendingCoins} />
      </div>
    </div>
  );
}

function Navbar() {
  return <div className="navbar">Koinx Crypto Dashboard</div>;
}

function CryptoInfo({ bitcoinData }) {
  return (
    <div className="section">
      <h3>Bitcoin Price Information</h3>
      {bitcoinData ? (
        <p>Price: ${bitcoinData.usd} | 24h Change: {bitcoinData.usd_24h_change.toFixed(2)}%</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function PerformanceFundamentals({ bitcoinData }) {
  return (
    <div className="section">
      <h3>Performance & Fundamentals</h3>
      <p>Market Cap: ${bitcoinData?.market_cap}</p>
      <p>Volume: ${bitcoinData?.total_volume}</p>
    </div>
  );
}

function TradingViewChart() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = () => {
      new window.TradingView.widget({
        symbol: 'BINANCE:BTCUSDT',
        interval: 'D',
        theme: 'light',
        container_id: 'tradingview_chart'
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id="tradingview_chart" style={{ height: '500px' }}></div>;
}

function MarketSentiment() {
  return <div className="section">Market Sentiment: Bullish</div>;
}

function Tokenomics() {
  return <div className="section">Tokenomics: Bitcoin has a supply of 21M coins.</div>;
}

function TeamInfo() {
  return <div className="section">Bitcoin was created by Satoshi Nakamoto.</div>;
}

function TrendingCoins({ trendingCoins }) {
  return (
    <div className="section">
      <h3>Trending Coins (24h)</h3>
      <div className="coin-list">
        {trendingCoins.map((coin, index) => (
          <div key={index} className="coin-item">
            <img src={coin.item.small} alt={coin.item.name} />
            <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function YouMayAlsoLike({ trendingCoins }) {
  return (
    <div className="section">
      <h3>You May Also Like</h3>
      <div className="coin-list">
        {trendingCoins.map((coin, index) => (
          <div key={index} className="coin-item">
            <img src={coin.item.small} alt={coin.item.name} />
            <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

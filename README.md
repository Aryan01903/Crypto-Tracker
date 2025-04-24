Crypto Price Tracker
A lightweight, real-time crypto price tracker built with React, Vite, and Redux Toolkit. It simulates live updates and shows essential market data for the top 5 cryptocurrencies. Inspired by platforms like CoinMarketCap — but built from scratch.

Features
-> Real-time simulated price updates (every 2 seconds)
-> Top 5 cryptos with detailed market info
-> Fully managed state using Redux Toolkit
-> Sparkline charts for 7-day price trends (SVG-based)
-> Responsive and clean table layout
-> Color-coded % changes (green for gains, red for losses)

Tech Stack
-> React + Vite – Fast front-end tooling and framework
-> Redux Toolkit – Global state management
-> CoinGecko API – Free crypto market data (no API key required)
-> CSS Modules – For scoped styling
-> SVG – Lightweight charts without any external chart library

Demo 
https://drive.google.com/file/d/1HjRBsb97Mb-cH96MZ1S5zDexes7Dx16D/view?usp=sharing


Data Source
This project uses CoinGecko's public API to fetch market data — no API key required.

How the Simulation Works
Every 2 seconds, the app simulates live updates by slightly adjusting: -> Current price
-> Percent changes (1h, 24h, 7d)
-> 24h trading volume

This mimics real-time WebSocket updates using setInterval() and Redux actions.

Why Redux?
Even though local state could work, Redux gives better control over: -> Global state access
-> Consistent updates
-> Clean separation of logic and UI

It also scales better for future improvements

Author Notes
This project started as a coding challenge to explore real-time UI and Redux integration. It’s built with performance and simplicity in mind — and can be easily extended.

Feel free to use it as a base for your own crypto tools or dashboards.

Contact
If you’d like to chat, contribute, or just say hey:

-> Email: main.aryanshrivastav2003@gmail.com
-> LinkedIn: https://www.linkedin.com/in/aryan-kumar-shrivastav-638831268/



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // ⬅️ pastikan ini bukan Auth langsung
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.jsx';
import './globals.css';

const rootElement = document.getElementById('__root__');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

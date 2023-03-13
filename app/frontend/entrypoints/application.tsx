import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'App';
import 'virtual:windi.css';

const rootElement = document.getElementById('root') as Element;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

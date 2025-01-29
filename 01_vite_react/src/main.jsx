import React from 'react'; // Ensure React is imported
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
  return <div>Custom App!</div>;
}

const anotherElement = (
  <a href="https://google.com" target="_blank" rel="noopener noreferrer">
    Visit Google
  </a>
);
const anotherUser="chai aur recat"
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank', rel: 'noopener noreferrer' },
  'Click me to visit Google',
  anotherUser
);

createRoot(document.getElementById('root')).render(
  // Render one of the elements:
 reactElement
);

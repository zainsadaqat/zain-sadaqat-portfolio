import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div
      onClick={handleClick}
      className="fixed bottom-4 right-4 p-2 bg-blue-500 rounded-full cursor-pointer"
    >
      <div className="rounded p-2 border-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </div>
    </div>
    <App />
  </React.StrictMode>
);

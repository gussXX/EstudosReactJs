import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import YoutubeUI from './youtubeUI/youTubeUI';
import ContentArea from './youtubeUI/contentArea';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <YoutubeUI/>
    </React.StrictMode>
);

reportWebVitals();

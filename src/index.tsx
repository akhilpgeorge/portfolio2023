import React from 'react';
import ReactDOM from 'react-dom/client';


const container:HTMLElement | null = document.getElementById('app');
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(
  <div>Hello</div>
)

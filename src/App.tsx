import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './modules/router/index';

function App() {
  return <RouterProvider router={router} />;
}

export default App;

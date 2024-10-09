import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './modules/router/index';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
function App() {
  return <RouterProvider router={router} />;
}

export default App;

import './App.css';
import router from './Pages/Router/Routes';
import {RouterProvider } from 'react-router-dom';

function App() {
  
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;

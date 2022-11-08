import { createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../Home/Home';
import Service from '../Services/Service';


const router = createBrowserRouter([
    { 
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/service',
            element:<Service></Service>,
            loader: ()=>fetch(`http://localhost:5000/service`)
        }
      ]
    }
  ])

  export default router;
import { createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import Login from '../Authentication/Login';
import Home from '../Home/Home';
import Service from '../Services/Service';
import SingleService from '../Services/SingleService';
import Signup from '../Authentication/Signup';
import User from '../User/User';


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
        },
        {
          path: '/singleservice/:id',
          element: <SingleService></SingleService>,
          loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/user',
          element: <User></User>
        }
      ]
    }
  ])

  export default router;
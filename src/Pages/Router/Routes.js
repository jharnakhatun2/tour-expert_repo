import { createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../Home/Home';
import Service from '../Services/Service';
import SingleService from '../Services/SingleService';


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
        }
      ]
    }
  ])

  export default router;
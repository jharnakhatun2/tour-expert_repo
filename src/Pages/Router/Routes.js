import { createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import Login from '../Authentication/Login';
import Home from '../Home/Home';
import Service from '../Services/Service';
import SingleService from '../Services/SingleService';
import Signup from '../Authentication/Signup';
import User from '../User/User';
import Review from '../Review/Review';
import AddServices from '../Services/AddServices';
import Blogs from '../Blogs/Blogs';
import Blog from '../Blogs/Blog';
import Update from '../Review/Update';
import Error from '../Error';


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
            loader: ()=>fetch(`https://tour-expert-server.vercel.app/service`)
        },
        {
          path: '/singleservice/:id',
          element: <SingleService></SingleService>,
          loader: ({params})=>fetch(`https://tour-expert-server.vercel.app/service/${params.id}`)
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
        },
        {
          path: '/review',
          element: <Review></Review>
        },
        {
          path: '/addservice',
          element: <AddServices></AddServices>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
          loader: ()=>fetch(`https://tour-expert-server.vercel.app/blogs`)
        },
        {
          path: '/blog/:id',
          element: <Blog></Blog>,
          loader: ({params})=>fetch(`https://tour-expert-server.vercel.app/blogs/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({params})=>fetch(`https://tour-expert-server.vercel.app/review/${params.id}`)
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    }
  ])

  export default router;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import Postdetail from './components/Postdetail/Postdetail';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: '/about',
//     element: <About></About>,
//     errorElement: <ErrorPage></ErrorPage>
//     // element: <div>This is the about page</div>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>,
//     errorElement: <ErrorPage></ErrorPage>
//     // element:<div>Contact us now. right now</div>
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <First></First>
      },
      {
         path:'friends',
         element: <Friends></Friends>,
         loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
         path:'friend/:friendId',
         element:<FriendDetails></FriendDetails>,
         loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
         path: 'posts',
         element:<Posts></Posts>,
         loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
         path:'post/:postId',
         element:<Postdetail></Postdetail>,
         loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  },
  {
    path: '/about',
    element: <About></About>,
    errorElement: <ErrorPage></ErrorPage>
    // element: <div>This is the about page</div>
  },
  {
    path: '/contact',
    element: <Contact></Contact>,
    errorElement: <ErrorPage></ErrorPage>
    // element:<div>Contact us now. right now</div>
  },
  {
    path: '*',
    element: <div>404</div>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

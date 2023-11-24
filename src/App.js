import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import './App.scss';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import WelcomePage from './Pages/Home/WelcomePage';
import Profile from './Pages/Profile/Profile';
import Log from './settings/log/Log';
import Login from './settings/login/Login';
import { useContext } from 'react';
import { DarkModeContext } from './Context/DarkModeContext';

function App() {
  
  const currentUser = true;
  const {darkMode} = useContext(DarkModeContext);

  console.log(darkMode);

  const Layout = ()=>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}` } >
        <Navbar/>
        <div className='width' style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
          <Outlet/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/welcome"/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/log",
          element:<Log/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    
    {
      path: "/welcome",
      element: <WelcomePage/>,
    },
   
  ]);
  return (
    <div className="App">
      <RouterProvider  router={router} />
    </div>
  );
}

export default App;

import React, { lazy, Suspense,useState ,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/common/Header";
import Body from "./components/home/Body";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Error from "./components/common/Error";
import Restraunts from "./components/menu/Restraunts";
import UserContext from "./utils/userContext";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/cart/Cart";

const About = lazy(() => import("./components/about/About"));

const App = () => {

  const [userName,setUserName]=useState();
  useEffect(()=>{
    const data = {
      name:"MJ"
    }
    setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName}} >
    <div className="app">
      <Header />
      <Outlet />
     
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1 className="load">Loading...</h1>}>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunts/:resId",
        element: <Restraunts />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
      
    ],
    errorElement: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetail from "./Pages/ProductDetail";
// absolute path
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement:<ErrorPage/>,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/product",
//         element: <ProductPage />,
//       },
//       {
//         path:"/product/:productId",
//         element:<ProductDetail/>
//       }
//     ],
//   },
// ]);



// relative path
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      // {
      //   path: "",
      //   element: <HomePage />,
      // },
        {
        index:true,
        element: <HomePage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path:"product/:productId",
        element:<ProductDetail/>
      }
    ],
  },
]);









// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />,
//     <Route path="/product" element={<ProductPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routerDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

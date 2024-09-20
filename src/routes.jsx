import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import RecordPage from "./pages/RecordPage/RecordPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import SavedPage from "./pages/SavedPage/SavedPage";

export const NavRoutes = [
  {
    path: '/saved',
    name: 'Saved'
  },
  {
    path: '/user',
    name: 'User'
  },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/albums/:id",
        element: <RecordPage />,
      },
      {
        path: "/artists/:id",
        element: <ArtistPage />,
      },
      {
        path: "/saved",
        element: <SavedPage />,
      },
    ],
  },
]);

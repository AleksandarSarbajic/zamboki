import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import RootLayout from "./routes/RootLayout";
import Root from "./routes/Root";
import { IconContext } from "react-icons";
import Gallery from "./routes/GalleryRoot";
import GalleryModal from "./routes/GalleryModal";
import { Provider } from "react-redux";
import store from "./redux/Store";
import AboutUsRoot from "./routes/AboutUsRoot";

import Contact from "./routes/Contact";

import Certificates from "./routes/Certificates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      { path: "/certificates", element: <Certificates /> },
      {
        path: "/gallery",
        element: <Gallery />,
        children: [
          {
            path: "/gallery/:id",
            id: "galleryItem",
            element: <GalleryModal />,
          },
        ],
      },
      {
        path: "/aboutUs",
        element: <AboutUsRoot />,
      },
      // {
      //   path: "/news",
      //   element: <NewsRoot />,
      // },
      // {
      //   path: "/news/:id",
      //   id: "newsItem",
      //   element: <SingleNewsPage />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <RouterProvider router={router} />
      </IconContext.Provider>
    </React.StrictMode>
  </Provider>
);

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

import Root from "./routes/root";

import ListRefLifts, { loader as refLiftLoader } from "./routes/listRefLifts";
import EditRefLifts, {
  loader as editLiftLoader,
  action as editLiftAction,
} from "./routes/editRefLift";

import AddRefLifts, {
  loader as addLiftLoader,
  action as addLiftAction,
} from "./routes/addRefLift";

import { action as destroyAction } from "./routes/destroy";

import Index from "./routes/index";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "referencelifts",
            element: <ListRefLifts />,
            id: "refLiftList",
            loader: refLiftLoader,
            children: [
              {
                path: ":referenceLiftId/edit",
                element: <EditRefLifts />,
                loader: editLiftLoader,
                action: editLiftAction,
              },
              {
                path: "add",
                element: <AddRefLifts />,
                loader: addLiftLoader,
                action: addLiftAction,
              },
              {
                path: ":referenceLiftId/edit/destroy",
                action: destroyAction,
                errorElement: <div>Oops! There was an error.</div>,
            
              }
            ],
          },
        ],
      },
    ],

  },
]);

export default function App() {
  return (
    <Authenticator>
      <RouterProvider router={router} />
    </Authenticator>
  );
}

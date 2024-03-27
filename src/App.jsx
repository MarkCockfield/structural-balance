import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

import Root, { loader as refLiftLoader } from "./routes/root";

import ListRefLifts from "./routes/listRefLifts";

import EditRefLifts, {
  loader as editLiftLoader,
  action as editLiftAction,
} from "./routes/editRefLift";

import AddRefLifts, {
  loader as addLiftLoader,
  action as addLiftAction,
} from "./routes/addRefLift";

import MasterLift, {
  action as masterLiftAction,
} from "./routes/masterLift";

import ListBalLifts, {
  loader as balLiftLoader,
} from "./routes/listBalLifts";

import { action as destroyAction } from "./routes/destroy";

import Index from "./routes/index";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: "appRoot",
    loader: refLiftLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "referencelifts",
            element: <ListRefLifts />,
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
          {
            path: "masterlift",
            element: <MasterLift />,
            action: masterLiftAction,
            children: [
              {
                path: ":liftId/:liftLoad/balancedLifts",
                element: <ListBalLifts />,
                loader: balLiftLoader,
              },
/*                {
                path: ":referenceLiftId/edit/destroy",
                action: destroyAction,
                errorElement: <div>Oops! There was an error.</div>,
            
              }
 */             ],
            },
            ],
            },
        ],
      },
    ],

);

export default function App() {
  return (
    <Authenticator>
      <RouterProvider router={router} />
    </Authenticator>
  );
}

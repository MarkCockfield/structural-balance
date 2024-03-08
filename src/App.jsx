import { 
  createBrowserRouter, 
  RouterProvider, 
} from "react-router-dom";

import { Amplify } from "aws-amplify";

import { generateClient } from "aws-amplify/api";
import { listReferenceLifts } from "././graphql/queries";

const client = generateClient();

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

import Root, {
  loader as rootLoader,
} from "./routes/root";

import Index from "./routes/index";
import ErrorPage from "./error-page";
import EditReferenceLift from "./routes/edit"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "referencelifts/:referenceliftId/edit",
            element: <EditReferenceLift />,
            loader: rootLoader,
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
  
{/*       {({ signOut, user }) => (
        <RouterProvider router={router} />
      )}
 */}    </Authenticator>
  );
}
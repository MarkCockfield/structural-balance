import { Outlet, Link } from "react-router-dom";

import { signOut } from "aws-amplify/auth";
import { listReferenceLifts } from "../graphql/queries";

import { generateClient } from "aws-amplify/api";
const client = generateClient();

export async function loader() {
  const referenceLiftData = await client.graphql({
    query: listReferenceLifts,
  });
  return { referenceLiftData };
}

export default function Root() {
  return (
    <>
      <div id="sidebar">
      <Link to={"/"}>{<img src="./HighEndLaunchLogo.svg" />}</Link>
        
        <h1>Structural Balance</h1>
        <div>
          <Link to="referencelifts">
            <button>Reference Lifts</button>
          </Link>
        </div>
        <div>
          <Link to="masterlift">
            <button>Master Lift</button>
          </Link>
        </div>
        <div>
          <button onClick={signOut}>Sign out</button>
        </div>
      </div>
      <div id="list-view">
        <Outlet />
      </div>
    </>
  );
}

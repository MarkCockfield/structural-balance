import {
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

import { signOut } from "aws-amplify/auth";

export default function Root() {
  let location = useLocation();
  console.log("Root: ", location);
  return (
    <>
      <div id="sidebar">
      <img src="/public/HighEndLaunchLogo.svg"/>
        <h1>Structural Balance</h1>
        <div>
        <Link to="referencelifts">
          <button>Reference Lifts</button>
        </Link>
 
           <button onClick={signOut}>Sign out</button>
        </div>
      </div>
      <div id="list-view">
        <Outlet />
      </div>
    </>
  );
}

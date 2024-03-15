import {
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

import { signOut } from "aws-amplify/auth";

//import { ButtLink } from "../components/buttonLink";

export default function Root() {
  let location = useLocation();
  console.log("Root: ", location);
  return (
    <>
      <div id="sidebar">
        <Link to="/">
          <img src="src/assets/HighEndLaunchLogo.svg" />
        </Link>

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

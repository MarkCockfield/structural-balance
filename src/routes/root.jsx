import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  useSubmit,
} from "react-router-dom";

import { listReferenceLifts } from "../graphql/queries";
//import { createReferenceLifts, updateReferenceLifts, deleteReferenceLifts } from '././src/graphql/mutations';

import { generateClient } from "aws-amplify/api";
const client = generateClient()

import { signOut } from 'aws-amplify/auth';

import { useEffect } from "react";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const referenceLiftData = await client.graphql({
    query: listReferenceLifts
  });

  return { referenceLiftData, q };
}

/* export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
 */
export default function Root() {
  const { referenceLiftData, q } = useLoaderData();
  const referencelifts = referenceLiftData.data.listReferenceLifts.items;

  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
  navigation.location &&
  new URLSearchParams(navigation.location.search).has(
    "q"
  );

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <div id="sidebar">
      <img src="src/assets/HighEndLaunchLogo.svg"/>
        <h1>Structural Balance</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search referenceLifts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
{/* 
          <Form method="post">
            <button type="submit">New</button>
          </Form>

 */}        </div>
 <div><button onClick={signOut}>Sign out</button></div>

        <nav>
          { referenceLiftData.data.listReferenceLifts.items.length ? (
            <ul>
              {referenceLiftData.data.listReferenceLifts.items.map((referenceLift) => (
                <li key={referenceLift.id}>
{/*                    <NavLink
                    to={`allReferenceLifts/${referenceLift.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
 */}                    <Link to={`referencelifts/${referenceLift.id}/edit`}>
                      {referenceLift.liftName ? (
                        <>
                          {referenceLift.liftName}
                        </>
                      ) : (
                        <i>No Reference Lifts</i>
                    )}{" "}
                         {" "}
                    </Link>
                  {/* </NavLink> */}
                 </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No referenceLifts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}

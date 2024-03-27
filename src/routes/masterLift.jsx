import {
  Outlet,
  Link,
  useRouteLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  useSubmit,
} from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const lift = Object.fromEntries(formData);

  return redirect(`${lift.liftId}/${lift.liftLoad}/balancedLifts`);
}

export default function MasterLift() {
  const { referenceLiftData } = useRouteLoaderData("appRoot");
  const referenceLifts = referenceLiftData.data.listReferenceLifts.items;
  referenceLifts.sort((a, b) => a.liftId - b.liftId);

  return (
    <>
      <div>
        {referenceLifts.length ? (
          <Form method="post" id="master-lift-form">
            <span>Master Lift</span>
            <p>
              <select name="liftId">
                {referenceLifts.map((lift) => (
                  <option key={lift.liftId} value={lift.liftId}>
                    {lift.liftName}
                  </option>
                ))}
              </select>
            </p>
            <p>
              <input
                placeholder="Lift Load"
                aria-label="Lift Load"
                type="number"
                name="liftLoad"
                defaultValue={0}
              />
            </p>
            <p>
              <button type="submit">Save</button>

              <button
                type="button"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </button>
            </p>
          </Form>
        ) : (
          <p>
            <i>No referenceLifts</i>
          </p>
        )}
      </div>
      <div id="detail-view">
        <Outlet />
      </div>
    </>
  );
}

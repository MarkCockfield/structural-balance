import {
  Form,
  useLoaderData,
  useRouteLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";

import { generateClient } from "aws-amplify/api";
const client = generateClient();

import { updateReferenceLifts } from "../graphql/mutations";

export async function loader({ params }) {
  const loaderParams = params;
  return { loaderParams };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const id = params.referenceLiftId;

  const queryInput = {
    id: id,
    liftId: updates.liftId,
    liftLoad: updates.liftLoad,
    liftName: updates.liftName,
  };

  await client.graphql({
    query: updateReferenceLifts,
    variables: { input: queryInput },
  });

  return redirect(`/referencelifts`);
}

export default function EditReferenceLift() {
  const { loaderParams } = useLoaderData();
  const { referenceLiftData } = useRouteLoaderData("refLiftList");
  const navigate = useNavigate();

  const refLiftItems = referenceLiftData.data.listReferenceLifts.items;

  const index = refLiftItems.findIndex(
    (refLiftItems) => refLiftItems.id == loaderParams.referenceLiftId
  );
  const referenceLift = refLiftItems[index];

  return (
    <>
      <Form
        method="post"
        action="destroy"
        onSubmit={(event) => {
          if (!confirm("Please confirm you want to delete this record.")) {
            event.preventDefault();
          }
        }}
      >
        <button type="submit">Delete</button>
      </Form>

      <Form method="post" id="detail-view-form">
        <p>
          <span>Reference Lift</span>
          <input
            placeholder="Lift ID"
            aria-label="Lift ID"
            type="number"
            name="liftId"
            defaultValue={referenceLift.liftId}
          />
          <input
            placeholder="Lift Name"
            aria-label="Lift Name"
            type="text"
            name="liftName"
            defaultValue={referenceLift.liftName}
          />
          <input
            placeholder="Lift Load"
            aria-label="Lift Load"
            type="number"
            name="liftLoad"
            defaultValue={referenceLift.liftLoad}
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
    </>
  );
}

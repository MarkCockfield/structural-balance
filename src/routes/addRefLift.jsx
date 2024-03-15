import {
  Form,
  useRouteLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";

import { generateClient } from "aws-amplify/api";
const client = generateClient();

import { createReferenceLifts } from "../graphql/mutations";

export async function loader({ params }) {
  const loaderParams = params;
  return { loaderParams };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const id = params.referenceLiftId;

  const queryInput = {
    liftId: updates.liftId,
    liftLoad: updates.liftLoad,
    liftName: updates.liftName,
  };

  await client.graphql({
    query: createReferenceLifts,
    variables: { input: queryInput },
  });

  return redirect(`/referencelifts`);
}

export default function AddReferenceLift() {
  const { referenceLiftData } = useRouteLoaderData("refLiftList");
  const navigate = useNavigate();

  const refLiftItems = referenceLiftData.data.listReferenceLifts.items;
  refLiftItems.sort((a, b) => a.liftId - b.liftId);
  const nextLiftId = refLiftItems[refLiftItems.length - 1].liftId + 1;

  return (
    <Form method="post" id="detail-view-form">
      <p>
        <span>Reference Lift</span>
        <input
          placeholder="Lift ID"
          aria-label="Lift ID"
          type="number"
          readOnly={true}
          name="liftId"
          defaultValue={nextLiftId}
        />
        <input
          placeholder="Lift Name"
          aria-label="Lift Name"
          type="text"
          name="liftName"
          defaultValue={""}
        />
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
  );
}

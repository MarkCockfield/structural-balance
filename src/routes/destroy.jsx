import { redirect } from "react-router-dom";
import { deleteReferenceLifts } from "../graphql/mutations";

import { generateClient } from "aws-amplify/api";
const client = generateClient();

/* 
export async function loader({ params }) {
  const loaderParams = params;
  return { loaderParams };
} */

export async function action({ params }) {
  const id = params.referenceLiftId;

  const queryInput = {
    id: id,
  };

  await client.graphql({
    query: deleteReferenceLifts,
    variables: { input: queryInput },
  });

  return redirect("/referencelifts");
}


import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";

import { ReferenceLiftsUpdateForm } from "../ui-components";

export default function EditReferenceLift() {
  const { referenceLiftData } = useLoaderData();
  const referenceLifts = referenceLiftData.data.listReferenceLifts.items[0];
  console.log('Edit: ',referenceLifts)
  const navigate = useNavigate();

  return <ReferenceLiftsUpdateForm id={referenceLifts.id} referencelifts={referenceLifts} />;
}

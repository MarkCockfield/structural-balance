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

import {
  Collection,
  Card,
  Heading,
  Text,
  Flex,
  ScrollView,
} from "@aws-amplify/ui-react";

/* import { listReferenceLifts } from "../graphql/queries";

import { generateClient } from "aws-amplify/api";
const client = generateClient();

export async function loader() {
  const referenceLiftData = await client.graphql({
    query: listReferenceLifts,
  });
  return { referenceLiftData };
}
 */ export default function ListRefLifts() {
  // const { referenceLiftData } = useLoaderData();
  const { referenceLiftData } = useRouteLoaderData("appRoot");

  const referenceLifts = referenceLiftData.data.listReferenceLifts.items;
  referenceLifts.sort((a, b) => a.liftId - b.liftId);

  return (
    <>
      <div>
        <p>
          <Link to={"add"}>{<button>Add Lift</button>}</Link>
        </p>
        {referenceLifts.length ? (
          <ScrollView height="600px" width="25rem">
            <Collection
              type="list"
              direction="column"
              wrap="wrap"
              items={referenceLifts.map(
                ({ id, liftId, liftLoad, liftName }) => ({
                  id,
                  liftId,
                  liftLoad,
                  liftName,
                })
              )}
            >
              {(item) => (
                <Card variation="elevated" key={item.id}>
                  <Link to={`${item.id}/edit`}>
                    <Flex direction="row" alignItems="flex-start">
                      <Text>{item.liftId}</Text>
                      <Text>{item.liftName}</Text>
                      <Text>{item.liftLoad}</Text>
                    </Flex>
                  </Link>
                </Card>
              )}
            </Collection>
          </ScrollView>
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

import {
  Outlet,
  Link,
  useLoaderData,
  useRouteLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  useSubmit,
} from "react-router-dom";

import { Collection, Card, Heading, Text, Flex, ScrollView, } from "@aws-amplify/ui-react";

import { listReferenceLifts } from "../graphql/queries";

import { generateClient } from "aws-amplify/api";
const client = generateClient();

export async function loader({ params }) {
  const loaderParams = params;
  return { loaderParams };
}

export default function ListBalLifts() {
  const { loaderParams } = useLoaderData();
  const masterLiftId = Number(loaderParams.liftId);
  const masterLiftLoad = Number(loaderParams.liftLoad);

  const { referenceLiftData } = useRouteLoaderData("appRoot");
  const referenceLifts = referenceLiftData.data.listReferenceLifts.items;
  referenceLifts.sort((a, b) => a.liftId - b.liftId);
  
  const masterRefLiftLoad = (referenceLifts.find(item => item.liftId == masterLiftId)).liftLoad;

  let balancedLifts = [];
  let loadFactor = 0;
  referenceLifts.forEach((refLift, i) => {
    if (refLift.liftId == masterLiftId) {
      balancedLifts.push({
        "id":refLift.id,
        "liftId":refLift.liftId,
        "liftName":refLift.liftName,
        "liftLoad":masterLiftLoad
      })
    } else
    {
//      loadFactor = refLift.liftLoad / masterRefLiftLoad
      loadFactor = Number((refLift.liftLoad / masterRefLiftLoad).toFixed(2))
    balancedLifts.push({
      "id":refLift.id,
      "liftId":refLift.liftId,
      "liftName":refLift.liftName,
      "liftLoad":Math.round((masterLiftLoad * loadFactor))
    })
    };
  });

  return (
    <>
      <div>
        {balancedLifts.length ? (
          <ScrollView height="600px" width="25rem">
            <Collection
              type="list"
              direction="column"
              wrap="wrap"
              items={balancedLifts.map(
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
            <i>No Balanced Lifts</i>
          </p>
        )}
      </div>
      <div id="detail-view">
        <Outlet />
      </div>
    </>
  );
}

import { generateClient } from "aws-amplify/api";
import { createReferenceLifts, updateReferenceLifts, deleteReferenceLifts } from './graphql/mutations';
import { listReferenceLiftss, getReferenceLifts } from "./graphql/queries";

const client = generateClient()

const newReferenceLifts = await client.graphql({
    query: createReferenceLifts,
    variables: {
        input: {
		"liftId": 1020,
		"liftName": "Lorem ipsum dolor sit amet",
		"liftLoad": 1020
	}
    }
});

const updatedReferenceLifts = await client.graphql({
    query: updateReferenceLifts,
    variables: {
        input: {
		"liftId": 1020,
		"liftName": "Lorem ipsum dolor sit amet",
		"liftLoad": 1020
	}
    }
});

const deletedReferenceLifts = await client.graphql({
    query: deleteReferenceLifts,
    variables: {
        input: {
            id: "YOUR_RECORD_ID"
        }
    }
});

// List all items
const allReferenceLiftss = await client.graphql({
    query: listReferenceLiftss
});
console.log(allReferenceLifts);

// Get a specific item
const oneReferenceLifts = await client.graphql({
    query: getReferenceLifts,
    variables: { id: 'YOUR_RECORD_ID' }
});
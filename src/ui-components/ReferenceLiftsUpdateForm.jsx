/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getReferenceLifts } from "../graphql/queries";
import { updateReferenceLifts } from "../graphql/mutations";
const client = generateClient();
export default function ReferenceLiftsUpdateForm(props) {
  const {
    id: idProp,
    referenceLifts: referenceLiftsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  console.log('Props: ', props)
  const initialValues = {
    liftId: "",
    liftName: "",
    liftLoad: "",
  };
  const [liftId, setLiftId] = React.useState(initialValues.liftId);
  const [liftName, setLiftName] = React.useState(initialValues.liftName);
  const [liftLoad, setLiftLoad] = React.useState(initialValues.liftLoad);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = referenceLiftsRecord
      ? { ...initialValues, ...referenceLiftsRecord }
      : initialValues;
    setLiftId(cleanValues.liftId);
    setLiftName(cleanValues.liftName);
    setLiftLoad(cleanValues.liftLoad);
    setErrors({});
  };
  console.log('referenceLiftsModelProp: ', referenceLiftsModelProp)
  const [referenceLiftsRecord, setReferenceLiftsRecord] = React.useState(
    referenceLiftsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getReferenceLifts.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getReferenceLifts
        : referenceLiftsModelProp;
      setReferenceLiftsRecord(record);
    };
    queryData();
  }, [idProp, referenceLiftsModelProp]);
  React.useEffect(resetStateValues, [referenceLiftsRecord]);
  const validations = {
    liftId: [{ type: "Required" }],
    liftName: [{ type: "Required" }],
    liftLoad: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          liftId,
          liftName,
          liftLoad,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateReferenceLifts.replaceAll("__typename", ""),
            variables: {
              input: {
                id: referenceLiftsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReferenceLiftsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Lift id"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={liftId}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              liftId: value,
              liftName,
              liftLoad,
            };
            const result = onChange(modelFields);
            value = result?.liftId ?? value;
          }
          if (errors.liftId?.hasError) {
            runValidationTasks("liftId", value);
          }
          setLiftId(value);
        }}
        onBlur={() => runValidationTasks("liftId", liftId)}
        errorMessage={errors.liftId?.errorMessage}
        hasError={errors.liftId?.hasError}
        {...getOverrideProps(overrides, "liftId")}
      ></TextField>
      <TextField
        label="Lift name"
        isRequired={true}
        isReadOnly={false}
        value={liftName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              liftId,
              liftName: value,
              liftLoad,
            };
            const result = onChange(modelFields);
            value = result?.liftName ?? value;
          }
          if (errors.liftName?.hasError) {
            runValidationTasks("liftName", value);
          }
          setLiftName(value);
        }}
        onBlur={() => runValidationTasks("liftName", liftName)}
        errorMessage={errors.liftName?.errorMessage}
        hasError={errors.liftName?.hasError}
        {...getOverrideProps(overrides, "liftName")}
      ></TextField>
      <TextField
        label="Lift load"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={liftLoad}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              liftId,
              liftName,
              liftLoad: value,
            };
            const result = onChange(modelFields);
            value = result?.liftLoad ?? value;
          }
          if (errors.liftLoad?.hasError) {
            runValidationTasks("liftLoad", value);
          }
          setLiftLoad(value);
        }}
        onBlur={() => runValidationTasks("liftLoad", liftLoad)}
        errorMessage={errors.liftLoad?.errorMessage}
        hasError={errors.liftLoad?.hasError}
        {...getOverrideProps(overrides, "liftLoad")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || referenceLiftsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || referenceLiftsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

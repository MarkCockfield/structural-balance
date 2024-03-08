/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReferenceLiftsCreateFormInputValues = {
    liftId?: number;
    liftName?: string;
    liftLoad?: number;
};
export declare type ReferenceLiftsCreateFormValidationValues = {
    liftId?: ValidationFunction<number>;
    liftName?: ValidationFunction<string>;
    liftLoad?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReferenceLiftsCreateFormOverridesProps = {
    ReferenceLiftsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    liftId?: PrimitiveOverrideProps<TextFieldProps>;
    liftName?: PrimitiveOverrideProps<TextFieldProps>;
    liftLoad?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReferenceLiftsCreateFormProps = React.PropsWithChildren<{
    overrides?: ReferenceLiftsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReferenceLiftsCreateFormInputValues) => ReferenceLiftsCreateFormInputValues;
    onSuccess?: (fields: ReferenceLiftsCreateFormInputValues) => void;
    onError?: (fields: ReferenceLiftsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReferenceLiftsCreateFormInputValues) => ReferenceLiftsCreateFormInputValues;
    onValidate?: ReferenceLiftsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReferenceLiftsCreateForm(props: ReferenceLiftsCreateFormProps): React.ReactElement;

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
export declare type ReferenceLiftsUpdateFormInputValues = {
    liftId?: number;
    liftName?: string;
    liftLoad?: number;
};
export declare type ReferenceLiftsUpdateFormValidationValues = {
    liftId?: ValidationFunction<number>;
    liftName?: ValidationFunction<string>;
    liftLoad?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReferenceLiftsUpdateFormOverridesProps = {
    ReferenceLiftsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    liftId?: PrimitiveOverrideProps<TextFieldProps>;
    liftName?: PrimitiveOverrideProps<TextFieldProps>;
    liftLoad?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReferenceLiftsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReferenceLiftsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    referenceLifts?: any;
    onSubmit?: (fields: ReferenceLiftsUpdateFormInputValues) => ReferenceLiftsUpdateFormInputValues;
    onSuccess?: (fields: ReferenceLiftsUpdateFormInputValues) => void;
    onError?: (fields: ReferenceLiftsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReferenceLiftsUpdateFormInputValues) => ReferenceLiftsUpdateFormInputValues;
    onValidate?: ReferenceLiftsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReferenceLiftsUpdateForm(props: ReferenceLiftsUpdateFormProps): React.ReactElement;

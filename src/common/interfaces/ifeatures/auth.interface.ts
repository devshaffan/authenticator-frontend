import { InputProps } from "@nextui-org/react";
import { AuthFormType } from "../../definitions/enums/auth.enum";
import { ChangeEvent } from "react";

export interface IUser {
	name: string;
	email: string;
	accessToken?: string;
}

export interface IResponse {
	success: boolean;
	message: string;
}

export interface ISignUpResponse extends IResponse {
	data?: ISignUpResponseData;
}

export interface ISignInResponse extends IResponse {
	data?: ISignInResponseData;
}

export interface IBaseAuthInput {
	isValid: boolean;
	onChange: InputProps["onChange"];
	value: InputProps["value"];
}

export interface IAuthForm {
	buttonText: string;
	onSubmit: () => void;
	title: string;
	children: React.ReactNode;
	isError?: boolean;
	isLoading?: boolean;
	isValid?: boolean;
	type: AuthFormType;
	error: { status: number; success: boolean } | null;
}

export interface IAuthEmail extends IBaseAuthInput {}
export interface IAuthName extends IBaseAuthInput {}
export interface IAuthPassword extends IBaseAuthInput {}

export interface ISignUpResponseData extends IUser {}
export interface ISignInResponseData extends IUser {}

export interface ISignInRequestData
	extends Omit<IUser, "name" | "accessToken"> {
	password: string;
}

export interface ISignUpRequestData extends Omit<IUser, "accessToken"> {
	password: string;
}

export interface IUserContext {
	userContext: IUser | null;
	setUserContext: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export interface IInputState {
	isValid: boolean;
	value: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IInputProp {
	shouldValidate?: boolean;
	regex?: RegExp;
}

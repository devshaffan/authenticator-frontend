import React from "react";
import "./style.css";
import { Button } from "@nextui-org/react";
import { IAuthForm } from "../../../../common/interfaces/ifeatures/auth.interface";
import { AuthFormType } from "../../../../common/definitions/enums/auth.enum";

export const Form = ({
	buttonText,
	children,
	error,
	isError,
	isLoading,
	isValid,
	onSubmit,
	title,
	type,
}: IAuthForm) => (
	<div className="absolute flex items-center justify-center h-full w-full bg-gradient-to-r from-purple-600 to-blue-500 p-6">
		<div className="flex w-full max-w-md flex-col items-center bg-white rounded-xl shadow-2xl p-10 transform hover:scale-105 transition duration-500">
			<h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
				{title}
			</h1>

			<div className="flex flex-col w-full gap-6">{children}</div>

			<Button
				variant="solid"
				radius="full"
				className={`mt-6 w-full py-3 text-lg font-semibold transition duration-300 ${
					type === AuthFormType.SIGN_IN
						? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
						: "bg-green-500 hover:bg-green-600 text-gray-900"
				}`}
				onClick={onSubmit}
				isDisabled={isLoading || !isValid}
				isLoading={isLoading}
			>
				{buttonText}
			</Button>

			{isError && error && (
				<p className="mt-4 text-center text-red-500 text-sm">
					{error.status === 401
						? "Invalid email or password"
						: error.status === 400 && type === AuthFormType.SIGN_UP
						? "User already exists!"
						: "Something went wrong, please try again later."}
				</p>
			)}
		</div>
	</div>
);

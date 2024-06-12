import React from "react";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { IAuthPassword } from "../../../../../common/interfaces/ifeatures/auth.interface";
import { validatePassword } from "../../../../../common/helpers/utils.helper";

export const Password = ({ isValid, ...props }: IAuthPassword) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const togglePasswordVisibility = () =>
		setIsPasswordVisible(!isPasswordVisible);

	return (
		<Input
			type={isPasswordVisible ? "text" : "password"}
			label="Password"
			minLength={8}
			validate={validatePassword}
			{...props}
			endContent={
				<button
					className="m-auto text-[0.625rem] text-[#A1A1AA] underline"
					onClick={togglePasswordVisibility}
					type="button"
				>
					{isPasswordVisible ? "Hide" : "Show"}
				</button>
			}
			classNames={{
				inputWrapper: `${!isValid && !props.value ? "!border-[#F26838]" : ""}`,
			}}
			variant="underlined"
		/>
	);
};

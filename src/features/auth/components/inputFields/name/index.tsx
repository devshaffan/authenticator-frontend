import React from "react";
import { Input } from "@nextui-org/react";
import { IAuthName } from "../../../../../common/interfaces/ifeatures/auth.interface";

export const Name = ({ isValid, value, onChange, ...props }: IAuthName) => (
	<Input
		label="Name"
		type="text"
		value={value}
		onChange={onChange}
		variant="underlined"
		{...props}
	/>
);

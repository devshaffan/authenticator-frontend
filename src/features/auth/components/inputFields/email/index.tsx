import React from "react";
import { IAuthEmail } from "../../../../../common/interfaces/ifeatures/auth.interface";
import { Input } from "@nextui-org/react";

export const Email = ({ isValid, ...props }: IAuthEmail) => (
	<Input
		label="Email"
		type="email"
		classNames={{
			inputWrapper: `${!isValid ? "!border-[#F26838]" : ""}`,
		}}
		variant="underlined"
		{...props}
	/>
);

import { ChangeEvent, useState } from "react";
import {
	IInputProp,
	IInputState,
} from "../../../common/interfaces/ifeatures/auth.interface";

const useInputState = (props?: IInputProp): IInputState => {
	const [isValid, setIsValid] = useState(true);
	const [value, setValue] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setValue(inputValue);
		if (props?.shouldValidate) validate(inputValue);
	};

	const validate = (inputValue: string) => {
		if (props?.regex) {
			setIsValid(props?.regex.test(inputValue));
		}
	};

	return {
		handleChange,
		isValid,
		value,
	};
};

export default useInputState;

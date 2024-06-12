import { VALIDATION_REGEX } from "../../../../common/definitions/constants";
import useInputState from "../../hooks/useInputState";
import { useSignInRepository } from "./signIn.repository.service";

export function useSignInFunctional() {
	const { error, isError, isPending, mutate } = useSignInRepository();

	const {
		handleChange: handleEmailChange,
		isValid: isEmailValid,
		value: email,
	} = useInputState({
		shouldValidate: true,
		regex: VALIDATION_REGEX.EMAIL,
	});

	const {
		isValid: isPasswordValid,
		value: password,
		handleChange: handlePasswordChange,
	} = useInputState({
		shouldValidate: true,
		regex: VALIDATION_REGEX.PASSWORD,
	});

	const handleSubmit = () => {
		if (isEmailValid && isPasswordValid) {
			mutate({ email, password });
		}
	};

	return {
		emailProps: {
			email,
			isEmailValid,
			handleEmailChange,
		},
		error: error as { status: number; success: boolean } | null,
		handleSubmit,
		isError,
		isLoading: isPending,
		passwordProps: {
			password,
			handlePasswordChange,
			isPasswordValid,
		},
	};
}

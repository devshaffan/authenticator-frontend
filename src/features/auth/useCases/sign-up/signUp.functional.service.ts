import useInputState from "../../hooks/useInputState";
import useSignUp from "./signUp.repository.service";

export function useSignUpFunctional() {
	const {
		handleChange: handleEmailChange,
		isValid: isEmailValid,
		value: email,
	} = useInputState({
		shouldValidate: true,
		regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	});

	const {
		handleChange: handlePasswordChange,
		isValid: isPasswordValid,
		value: password,
	} = useInputState({
		shouldValidate: true,
		regex:
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
	});

	const {
		handleChange: handleNameChange,
		isValid: isNameValid,
		value: name,
	} = useInputState({
		shouldValidate: true,
		regex: /^[a-zA-Z]+ [a-zA-Z]+$/,
	});

	const { error, isError, isPending, mutate } = useSignUp();

	const handleSubmit = () => {
		console.log(" i am here");
		if (isEmailValid && isPasswordValid) {
			mutate({ email, name, password });
		}
	};

	return {
		emailProps: {
			handleEmailChange,
			isEmailValid,
			email,
		},
		error: error as { status: number; success: boolean } | null,
		nameProps: {
			handleNameChange,
			isNameValid,
			name,
		},
		handleSubmit,
		isError,
		isLoading: isPending,
		passwordProps: {
			handlePasswordChange,
			isPasswordValid,
			password,
		},
	};
}

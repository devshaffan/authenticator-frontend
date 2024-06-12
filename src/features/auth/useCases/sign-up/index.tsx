import { Form } from "../../components/form";
import { Password } from "../../components/inputFields/password";
import { Email } from "../../components/inputFields/email";
import { AuthFormType } from "../../../../common/definitions/enums/auth.enum";
import { useSignUpFunctional } from "./signUp.functional.service";
import { Name } from "../../components/inputFields/name";

export const SignUp = () => {
	const {
		emailProps: { handleEmailChange, isEmailValid, email },
		error,
		nameProps: { isNameValid, handleNameChange, name },
		handleSubmit,
		isError,
		passwordProps: { handlePasswordChange, isPasswordValid, password },
	} = useSignUpFunctional();

	return (
		<>
			<title>Sign Up</title>

			<Form
				title="Register"
				buttonText="Sign Up"
				onSubmit={handleSubmit}
				isError={isError}
				error={error}
				isValid={
					isEmailValid && isPasswordValid && name && email && password && name
						? true
						: false
				}
				type={AuthFormType.SIGN_UP}
			>
				<Name isValid={isNameValid} onChange={handleNameChange} value={name} />

				<Email
					isValid={isEmailValid}
					onChange={handleEmailChange}
					value={email}
				/>

				<Password
					isValid={isPasswordValid}
					onChange={handlePasswordChange}
					value={password}
				/>
			</Form>
		</>
	);
};

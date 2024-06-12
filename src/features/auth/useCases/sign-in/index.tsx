import React from "react";
import { Form } from "../../components/form";
import { Email } from "../../components/inputFields/email";
import { Password } from "../../components/inputFields/password";
import { AuthFormType } from "../../../../common/definitions/enums/auth.enum";
import { useSignInFunctional } from "./signIn.functional.service";

export const SignIn = () => {
	const {
		emailProps: { isEmailValid, email, handleEmailChange },
		error,
		handleSubmit,
		isError,
		passwordProps: { isPasswordValid, password, handlePasswordChange },
	} = useSignInFunctional();

	return (
		<>
			<title>Sign In</title>

			<Form
				title="Authenticator"
				buttonText="Sign In"
				onSubmit={handleSubmit}
				isError={isError}
				error={error}
				isLoading={false}
				isValid={
					isEmailValid && isPasswordValid && email && password ? true : false
				}
				type={AuthFormType.SIGN_IN}
			>
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

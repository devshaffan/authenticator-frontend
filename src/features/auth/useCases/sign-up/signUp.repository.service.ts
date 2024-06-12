import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
	ISignUpRequestData,
	ISignUpResponse,
} from "../../../../common/interfaces/ifeatures/auth.interface";
import { useUserContext } from "../../../../common/context/user.context";
import { ROUTES } from "../../../../common/definitions/constants";
import { signUpApi } from "./signUp.api.service";

export function useSignUp(): UseMutationResult<
	ISignUpResponse,
	Error,
	ISignUpRequestData,
	unknown
> {
	const navigate = useNavigate();
	const { setUserContext } = useUserContext();

	const mutation = useMutation({
		mutationFn: (
			data: ISignUpRequestData
		): Promise<ISignUpResponse | undefined> => {
			console.log("i am here");
			return signUpApi(data);
		},
		onSuccess(response: any) {
			if (response.data) {
				const userData = response.data;

				setUserContext({
					email: userData?.email || "",
					name: userData?.name || "",
					accessToken: userData?.accessToken,
				});

				navigate(ROUTES.DASHBOARD);
			}
		},
	});

	return mutation;
}

export default useSignUp;

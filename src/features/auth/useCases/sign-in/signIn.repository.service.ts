import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signInApi } from "./signIn.api.service";
import {
	ISignInRequestData,
	ISignInResponse,
} from "../../../../common/interfaces/ifeatures/auth.interface";
import { useUserContext } from "../../../../common/context/user.context";
import { ROUTES } from "../../../../common/definitions/constants";

export function useSignInRepository(): UseMutationResult<
	ISignInResponse,
	Error,
	ISignInRequestData,
	unknown
> {
	const navigate = useNavigate();
	const { setUserContext } = useUserContext();

	const mutation = useMutation({
		mutationFn: (payload: ISignInRequestData): Promise<ISignInResponse> => {
			return signInApi(payload);
		},
		onSuccess(response) {
			if (response.data) {
				const data = response.data;

				setUserContext({
					email: data?.email || "",
					name: data?.name || "",
					accessToken: data?.accessToken,
				});

				navigate(ROUTES.DASHBOARD);
			}
		},
	});

	return mutation;
}

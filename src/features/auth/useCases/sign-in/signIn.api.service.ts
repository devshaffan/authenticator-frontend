import {
	ISignInRequestData,
	ISignInResponse,
} from "../../../../common/interfaces/ifeatures/auth.interface";
import { AxiosAdapter } from "../../../../common/adapter/axios.adapter";
import { API_ENDPOINT } from "../../../../common/definitions/constants";

export const signInApi = async (data: ISignInRequestData) => {
	const response = await AxiosAdapter.post(API_ENDPOINT.AUTH.SIGN_IN, data);
	const result = response.data as ISignInResponse;

	if (result.success) {
		return result;
	}
	throw result;
};

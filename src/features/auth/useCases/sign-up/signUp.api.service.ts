import {
	ISignUpRequestData,
	ISignUpResponse,
} from "../../../../common/interfaces/ifeatures/auth.interface";
import { AxiosAdapter } from "../../../../common/adapter/axios.adapter";
import { API_ENDPOINT } from "../../../../common/definitions/constants";

export const signUpApi = async (data: ISignUpRequestData) => {
	const response = await AxiosAdapter.post(API_ENDPOINT.AUTH.SIGN_UP, data);
	const result = response.data as ISignUpResponse;

	if (result.success) {
		return result;
	}
	throw result;
};

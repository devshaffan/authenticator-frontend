import axios, { AxiosInstance, AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import { API_BASE_URL } from "../definitions/constants";

export class AxiosAdapter {
	static instance: AxiosAdapter;
	static axiosInstance: AxiosInstance;
	static readonly maximumRetries: number = 2;
	currentRetries: number = 0;

	private constructor() {
		const axiosClient = axios.create({
			baseURL: API_BASE_URL,
			headers: {
				"Content-Type": "application/json",
			},
		});

		AxiosAdapter.axiosInstance = axiosClient;

		axiosRetry(axiosClient, {
			onRetry: (retryCount: number) => {
				if (retryCount >= AxiosAdapter.maximumRetries) {
					console.error("Max retries reached");
				} else this.currentRetries++;
			},
			retries: AxiosAdapter.maximumRetries,
			retryDelay: (retryCount: number) => {
				return retryCount * 1000;
			},
		});
	}

	static getAxiosInstance(): AxiosInstance {
		if (!AxiosAdapter.instance) {
			AxiosAdapter.instance = new AxiosAdapter();
		}
		return AxiosAdapter.axiosInstance;
	}

	public static get<T>(url: string): Promise<AxiosResponse<T>> {
		return this.getAxiosInstance().get(url);
	}

	public static post<T>(url: string, data?: object): Promise<AxiosResponse<T>> {
		return this.getAxiosInstance().post(url, data || {});
	}
}

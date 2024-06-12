export const ROUTES = {
	SIGN_IN: "/signIn",
	SIGN_UP: "/signUp",
	DASHBOARD: "/dashboard",
};

export const API_ENDPOINT = {
	AUTH: {
		SIGN_UP: "auth/sign_up",
		SIGN_IN: "auth/sign_in",
	},
};

export const API_BASE_URL = "http://localhost:3000";

export const VALIDATION_REGEX = {
	EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	PASSWORD:
		/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

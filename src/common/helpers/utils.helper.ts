export const validatePassword = (password: string) => {
	if (!password) return "Password Is Required!.";

	if (password.length < 8) return "Minimum Length Of 8 Characters!.";

	if (!/(?=.*[a-z])/.test(password)) return "At least 1 Lower Case Letter!.";

	if (!/(?=.*\d)/.test(password)) return "At Least One Number!.";

	if (!/(?=.*[@$!%*?&])/.test(password))
		return "At Least One Special Character";

	return "";
};

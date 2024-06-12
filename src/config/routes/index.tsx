import { createBrowserRouter } from "react-router-dom";
import { SignInPage } from "../../pages/sign-in";
import { SignUpPage } from "../../pages/sign-up";
import { Dashboard } from "../../features/dashboard";
import App from "../../App";
import { ROUTES } from "../../common/definitions/constants";
import ErrorPage from "../../common/components/error";

export const Router = createBrowserRouter([
	{
		children: [
			{
				path: ROUTES.DASHBOARD,
				element: <Dashboard />,
			},
			{
				path: ROUTES.SIGN_UP,
				element: <SignUpPage />,
			},
			{
				element: <SignInPage />,
				path: ROUTES.SIGN_IN,
			},
		],
		element: <App />,
		errorElement: <ErrorPage />,
		path: "/",
	},
]);

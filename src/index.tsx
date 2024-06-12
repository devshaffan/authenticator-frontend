import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./config/routes";
import { UserContextProvider } from "./common/context/user.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
	<React.StrictMode>
		<NextUIProvider>
			<UserContextProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={Router} />
				</QueryClientProvider>
			</UserContextProvider>
		</NextUIProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

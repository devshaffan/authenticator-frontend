import React, { useContext } from "react";
import { Outlet, Route, useNavigate } from "react-router-dom";
import { useUserContext } from "./common/context/user.context";
import { ROUTES } from "./common/definitions/constants";

const App = () => {
	return <Outlet />;
};

export default App;

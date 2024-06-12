import React, { createContext, ReactNode, useContext, useState } from "react";
import { IUser, IUserContext } from "../interfaces/ifeatures/auth.interface";

export const initialUserState: IUser = {
	email: "",
	name: "",
};

const UserContext = createContext<any | null>(undefined);

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [userContext, setUserContext] = useState<IUser | null>(null);

	return (
		<UserContext.Provider value={{ userContext, setUserContext }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = (): IUserContext => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("User context cannot be undefined");
	}
	return context;
};

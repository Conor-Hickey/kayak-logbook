"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;

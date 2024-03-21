"use client";
import { ModeToggle } from "@/components/dark-mode-toggle";
import KayakTrips from "@/components/kayak-trips";
import { AuthContent } from "@/content/landing-page/Auth";
import { useSession } from "next-auth/react";

export default function App() {
	const { data: session } = useSession();

	return (
		<>
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<ModeToggle />
			</div>
			{session ? <KayakTrips /> : <AuthContent />}
		</>
	);
}

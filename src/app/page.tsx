"use client"
import { useSession } from "next-auth/react";
import { AuthContent } from "@/content/landing-page/Auth";

export default function App() {
	const { data: session } = useSession();


	return session ? (
		<h1>Hello</h1>
	) : (
		<AuthContent />
	);
}
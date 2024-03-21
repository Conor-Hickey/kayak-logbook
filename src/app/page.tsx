"use client"
import { useSession } from "next-auth/react";
import { AuthContent } from "@/content/landing-page/Auth";
import { createClient } from "@supabase/supabase-js";
import KayakTrips from "@/components/kayak-trip-lists";

const supabase = createClient("https://mtuvumtbujjuwtuxhzvn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dXZ1bXRidWpqdXd0dXhoenZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMjIxMzYsImV4cCI6MjAyNjU5ODEzNn0.ofAEbhfn6lHJnFwp92VUBm-HzrTyMV3-nwtphCa1wuY");

export default function App() {
	const { data: session } = useSession();

	return session ? (
	<KayakTrips/>
	) : (
		<AuthContent />
	);
}
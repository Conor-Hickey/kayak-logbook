import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const AuthContent = () => {
	const logInHandler = () => void signIn("google");

	return (
		<div className="flex h-screen w-screen items-center justify-center text-gray-500">
			<div className="flex w-[500px] h-[50px] flex-col rounded-md bg-white">
				<div className="flex items-center justify-between p-2 text-sm">
					<div className="p-1">
						<h4>Welcome to Kayak Logbook </h4>
					</div>
					<div>
						<h4>Version 1</h4>
					</div>
				</div>
				<Button
					type="button"
					onClick={logInHandler}
					className="w-full rounded-none rounded-b-md bg-[#2196f3] p-2 text-xs text-white cursor-pointer"
				>
					Login
				</Button>
			</div>
		</div>
	);
};

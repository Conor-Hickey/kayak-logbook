import { Button } from "@/components/ui/button";
import { TableHead } from "@/components/ui/table";
import { createClient } from "@supabase/supabase-js";
import { Plus } from "lucide-react";
import { toast } from "../ui/use-toast";

export const AddTripFooter = () => {
	const addTripHandler = async () => {
		try {
			const supabaseUrl = process.env.REACT_APP_SUPABASE_URLSUPABASE_URL!;
			const supabaseAnonKey = process.env.REACT_APP_SUPABASE_URLSUPABASE_KEY!;
			const supabase = createClient(supabaseUrl, supabaseAnonKey);
			const { error } = await supabase
				.from("kayakingtrips")
				.insert([{ rivername: "Tryweryn" }])
				.select();
			if (error) throw error;
		} catch (error) {
			toast({
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
				variant: "destructive",
			});
			console.warn(error);
		}
	};

	return (
		<TableHead colSpan={100} className="p-0">
			<Button
				onClick={addTripHandler}
				className="flex w-full cursor-pointer items-center justify-start "
			>
				<Plus className="mr-2 h-4 w-4 text-neutral-700" />
				New item
			</Button>
		</TableHead>
	);
};

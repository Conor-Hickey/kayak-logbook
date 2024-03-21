import { Button } from "@/components/ui/button";
import { TableHead } from "@/components/ui/table";
import { Plus } from "lucide-react";

export const AddTripFooter = () => {
	const addItemHandler = async () => {
		console.log("add");
	};

	return (
		<TableHead colSpan={100} className="p-0">
			<Button
				onClick={addItemHandler}
				className="flex w-full cursor-pointer items-center justify-start "
			>
				<Plus className="mr-2 h-4 w-4 text-neutral-700" />
				New item
			</Button>
		</TableHead>
	);
};

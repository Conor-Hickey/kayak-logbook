"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type KayakTrip = {
	tripid: number;
	rivername: string;
	gaugeLevel?: string;
	riverGrade?: string;
	notes?: string;
	guideLink?: string;
};

export const columns: ColumnDef<KayakTrip>[] = [
	{
		accessorKey: "rivername",
		header: "River Name",
	},
	{
		accessorKey: "gaugeLevel",
		header: "Gauge Level",
	},
	{
		accessorKey: "riverGrade",
		header: "River Grade",
	},
	{
		accessorKey: "notes",
		header: "Notes",
	},
	{
		accessorKey: "guideLink",
		header: "Guide Link",
	},
];

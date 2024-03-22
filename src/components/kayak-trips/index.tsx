import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { KayakTrip, columns } from "./columns";

import { DataTable } from "./data-table";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URLSUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_URLSUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function KayakTrips() {
	const [kayakTrips, setKayakTrips] = useState<KayakTrip[]>([]);

	useEffect(() => {
		async function getKayakTrips() {
			const { data } = await supabase.from("kayakingtrips").select();
			setKayakTrips(data || [{ rivername: "No Rivers Trips Found" }]);
		}

		getKayakTrips();
	}, []);

	return <DataTable columns={columns} data={kayakTrips} />;
}

export default KayakTrips;

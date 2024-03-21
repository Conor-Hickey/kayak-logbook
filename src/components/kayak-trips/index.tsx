import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { KayakTrip, columns } from "./columns"

import { DataTable } from "../ui/data-table";

const supabaseUrl = "https://mtuvumtbujjuwtuxhzvn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dXZ1bXRidWpqdXd0dXhoenZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMjIxMzYsImV4cCI6MjAyNjU5ODEzNn0.ofAEbhfn6lHJnFwp92VUBm-HzrTyMV3-nwtphCa1wuY";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// interface KayakTrip {
//   tripid: number;
//   rivername: string;
//   gaugeLevel?: string;
//   riverGrade?: string;
//   notes?: string;
//   guideLink?: string;
// }

function KayakTrips() {
  const [kayakTrips, setKayakTrips] = useState<KayakTrip[]>([]);

  useEffect(() => {
    async function getKayakTrips() {
      const { data } = await supabase.from("kayakingtrips").select();
      setKayakTrips(data || [{ rivername: "No Rivers Trips Found" }]);
    }

    getKayakTrips();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={kayakTrips} />
    </div>
  );
}

export default KayakTrips;

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const supabaseUrl = "https://mtuvumtbujjuwtuxhzvn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dXZ1bXRidWpqdXd0dXhoenZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMjIxMzYsImV4cCI6MjAyNjU5ODEzNn0.ofAEbhfn6lHJnFwp92VUBm-HzrTyMV3-nwtphCa1wuY";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface KayakTrip {
  tripid: number;
  rivername: string;
  gaugeLevel?: string;
  riverGrade?: string;
  notes?: string;
  guideLink?: string;
}

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
    <Table>
      <TableCaption>A list of your recent kayaking trips.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>River Name</TableHead>
          <TableHead>Gauge Level</TableHead>
          <TableHead>River Grade</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead>Guide Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {kayakTrips.length > 0 ? (
          kayakTrips.map((trip) => (
            <TableRow key={trip.tripid}>
              <TableCell>{trip.rivername}</TableCell>
              <TableCell>{trip.gaugeLevel ?? "N/A"}</TableCell>
              <TableCell>{trip.riverGrade ?? "N/A"}</TableCell>
              <TableCell>{trip.notes ?? "N/A"}</TableCell>
              <TableCell>
                {trip.guideLink ? (
                  <a
                    href={`${trip.guideLink.startsWith('http://') || trip.guideLink.startsWith('https://') ? '' : 'https://'}${trip.guideLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guide
                  </a>
                ) : (
                  "N/A"
                )}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5}>No kayaking trips found.</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default KayakTrips;

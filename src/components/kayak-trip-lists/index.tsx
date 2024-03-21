
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtuvumtbujjuwtuxhzvn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dXZ1bXRidWpqdXd0dXhoenZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMjIxMzYsImV4cCI6MjAyNjU5ODEzNn0.ofAEbhfn6lHJnFwp92VUBm-HzrTyMV3-nwtphCa1wuY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function KayakTrips() {
    const [kayakTrips, setKayakTrips] = useState([]);

    useEffect(() => {
      async function getKayakTrips() {
        const { data } = await supabase.from("kayakingtrips").select();
        setKayakTrips(data || [{rivername: "test"}]);
      }

      getKayakTrips();
    }, []);

    return (
        <ul>
            {kayakTrips.map((kayakingtrip) => (
                <li key={kayakingtrip.rivername}>{kayakingtrip.rivername}</li>
            ))}
        </ul>
    );
}

export default KayakTrips;
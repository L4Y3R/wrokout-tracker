'use client';

import { useEffect, useState } from "react";
import WorkoutCard from '../components/WorkoutCard';
import AddWokout from '../components/AddWorkout'
import { useAuthContext } from '../hooks/useAuthContext'
import Link from "next/link";

interface Workout {
  _id: string;
  title: string;
}

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[] | null>(null);
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/workouts", {
          headers:{
            'Authorization': `Bearer ${user.token}`
          }
        }); 
        const json = await response.json();
        console.log("Received data:", json);

        if (response.ok) {
          setWorkouts(json);
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    if(user){
      fetchWorkouts();
    }
  });

  return (
    <main className="px-3 md:px-20 flex-col md:flex">
      <style>
        {`
          html, body {
            background-color: #dee4e7;
          }
        `}
      </style>

      { user && (
        <>
        <div className="w-full mt-5 md:mt-0 md:fixed md:top-28 md:right-20 md:w-64 md:ml-5 bg-slate-100 rounded-xl p-5 md:h-80 shadow-lg border">
        <AddWokout/>
        </div>

        <div className="w-full md:w-2/3 mt-3 md:mt-24 grid grid-cols-1 md:grid-cols-2">
          {workouts ? (
            workouts.map((workout) => (
              <WorkoutCard key={workout._id} workout={workout} />
            ))
          ) : (
            <p>Loading...</p>
          )}
          </div>
      </>
      )}

      {!user && (
        <div>
          <span className="flex justify-center items-center mt-64 font-bungee text-5xl"> Welcome to Wrokout Tracker </span>
          <br></br>

          <span className="flex font-bold md:justify-center items-center"> Please Log In or Sign Up to continue</span>
        </div>
      )}
      
    </main>
  );
}

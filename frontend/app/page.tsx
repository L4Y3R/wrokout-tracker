'use client';

import { useEffect, useState } from "react";
import WorkoutCard from '../components/WorkoutCard';
import AddWokout from '../components/AddWorkout'

interface Workout {
  _id: string;
  title: string;
  // Add other properties as needed
}

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[] | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/workouts"); // Specify the full backend URL
        const json = await response.json();
        console.log("Received data:", json);

        if (response.ok) {
          setWorkouts(json);
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <main className="px-40 pt-5 flex">
      <div className="w-2/3">
        {workouts ? (
          workouts.map((workout) => (
            <WorkoutCard key={workout._id} workout={workout}/>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="w-1/3 mt-5 ml-5">
        <AddWokout/>
      </div>
    </main>
  );
}

import { formatDistanceToNow } from "date-fns";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutCard = ({ workout }) => {
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const isConfirmed = window.confirm(
      "Are you sure you want to delete this workout?"
    );

    if (isConfirmed) {
      const response = await fetch(
        `http://localhost:4000/api/workouts/${workout._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        console.error("Error deleting workout:", json);
      } else {
        console.log("Workout deleted successfully", json);
      }
    }
  };

  return (
    <div className="bg-amber-400 rounded-lg border-2 border-white hover:shadow-lg hover:bg-amber-300 transition-all duration-300 ease-in-out p-5 my-2 md:m-5">
      <div className="flex justify-between pb-3">
        <h2 className="text-lg font-extrabold text-white"> {workout.title} </h2>
        <button onClick={handleDelete}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512">
            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
          </svg>{" "}
        </button>
      </div>
      <h2>
        {" "}
        <span className="font-semibold"> Load: (Kg): </span> {workout.load}{" "}
      </h2>
      <h2>
        {" "}
        <span className="font-semibold"> Reps: </span> {workout.repititions}{" "}
      </h2>
      <h2 className="mt-3 text-sm text-gray-100">
        {" "}
        {formatDistanceToNow(new Date(workout.createdAt), {
          addSuffix: true,
        })}{" "}
      </h2>
    </div>
  );
};

export default WorkoutCard;

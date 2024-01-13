const WorkoutCard = ({ workout }) =>{
    return(
        <div className="rounded-lg border hover:shadow-lg p-5 m-5">
            <h2 className="text-lg font-extrabold pb-3 text-amber-500"> {workout.title} </h2>
            <h2> <span className="font-semibold"> Load (Kg): </span> {workout.load} </h2>
            <h2> <span className="font-semibold"> Reps: </span> {workout.repititions} </h2>
            <h2 className="mt-3 text-sm"> {workout.createdAt} </h2>
        </div>
    )
}

export default WorkoutCard;
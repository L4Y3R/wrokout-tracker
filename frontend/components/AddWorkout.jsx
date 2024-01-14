import { useState } from "react";

const AddWorkout = () =>{
    const [title, setTitle] = useState('');
  const [repititions, setRepititions] = useState('');
  const [load, setLoad] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, repititions, load };

    const response = await fetch("http://localhost:4000/api/workouts", {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    try {
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFileds || []); // Check if json.emptyFileds is defined
      }
      if (response.ok) {
        setTitle('');
        setRepititions('');
        setLoad('');
        setError(null);
        setEmptyFields([]);
        console.log('New Workout Added', json);
      }
    } catch (error) {
      console.error('Error parsing JSON response:', error);
    }
  };

    return(
        <form onSubmit={handleSubmit}>
            <h3 className="font-extrabold text-xl mb-2 md:mb-7"> Add a Workout </h3>

            <label className="font-bold"> Excersize Title </label>
            <br></br>
            <input 
                type="text"
                onChange = {(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'rounded-full w-full h-8 p-3 mt-1 border-red-500' : 'rounded-full w-full border h-8 p-3 mt-1'}
            />
            <br></br>

            <div className="flex justify-between mt-3">
            <label className="font-bold"> Repes </label>
            <label className="font-bold"> Load (Kg) </label>
            </div>

            <div className="flex justify-between">
                <input 
                    type="number"
                    onChange = {(e) => setRepititions(e.target.value)}
                    value={repititions}
                    className={emptyFields.includes('repititions') ? 'rounded-full w-full h-8 p-3 mt-1 border-red-500' : 'rounded-full w-full border h-8 p-3 mt-1'}
                />
                <input 
                    type="number"
                    onChange = {(e) => setLoad(e.target.value)}
                    value={load}
                    className={emptyFields.includes('load') ? 'rounded-full w-full h-8 p-3 mt-1 border-red-500' : 'rounded-full w-full border h-8 p-3 mt-1'}
                /> 
            </div>
            <br></br>
            <button className="w-full rounded-lg bg-amber-500 h-10 font-bold hover:bg-amber-400 transition-all duration-300 ease-in-out"> Add Workout </button>

            {error && <div className="text-red-600"> {error} </div>}
        </form>
    )
}

export default AddWorkout;
const Workout = require('../models/workout')
const mongoose = require('mongoose')

// get ALL workouts
const getAllWorkouts = async (req,res) =>{
    try{
        const workout = await Workout.find({}).sort({ createdAt: -1})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message})
        console.log(err)
    }
}

// get ONE workout
const getOneWorkout = async (req,res) =>{
    const { id } = req.params

    try{
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ error: "Object ID is not valid"})
        }
        
        const workout = await Workout.findById(id)

        if (!workout){
            return res.status(404).json({ error: "No Such Workout"})
        }

        res.status(200).json(workout)

    } catch (err) {
        res.status(400).json({ error: err.message})
        console.log(err)
    }
}

// CREATE workout 
const createWorkout = async (req,res) =>{
    const { title, repititions, load } = req.body

    let emptyFields = []

    if (!title){
        emptyFields.push('title')
    }
    if (!repititions){
        emptyFields.push('repititions')
    }
    if (!load){
        emptyFields.push('load')
    }

    if( emptyFields.length > 0 ){
         return res.status(400).json({ error: "Please fill in all the fields ", emptyFields})
    }

    try{
        const workout = await Workout.create({ title, repititions, load })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message})
        console.log(err)
    }
}

// DELETE workout
const deleteWorkout = async (req,res) =>{
    const { id } = req.params

    try{
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ error: "Object ID is not valid"})
        }
        
        const workout = await Workout.findOneAndDelete({ _id: id})

        if (!workout){
            return res.status(400).json({ error: "No Such Workout"})
        }

        res.status(200).json(workout)

    } catch (err) {
        res.status(400).json({ error: err.message})
        console.log(err)
    }
}

// UPDATE workout
const updateWorkout = async (req,res) =>{
    const { id } = req.params

    try{
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ error: "Object ID is not valid"})
        }
        
        const workout = await Workout.findOneAndUpdate({ _id: id}, {
            ...req.body
        })

        if (!workout){
            return res.status(400).json({ error: "No Such Workout"})
        }

        res.status(200).json(workout)

    } catch (err) {
        res.status(400).json({ error: err.message})
        console.log(err)
    }
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}
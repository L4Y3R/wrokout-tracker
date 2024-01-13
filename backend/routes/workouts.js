const express = require('express')
const router = express.Router()

const {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout } = require('../controllers/workoutController')


router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkout)

router.post('/', createWorkout )

router.delete('/:id', deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router
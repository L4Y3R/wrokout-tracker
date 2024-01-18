const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

const {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout } = require('../controllers/workoutController')


// requiring the auth for all routes below this
router.use(requireAuth)

router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkout)

router.post('/', createWorkout )

router.delete('/:id', deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router
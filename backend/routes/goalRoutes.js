//to use express router
const express = require('express')
const router = express.Router()
//get exports from controller
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')


/*
    -Route to get goals example
    -'get' is the request the server listens for
*/
//all you need is a '/' because /api/goals is specified in server.js

/*
router.get('/', getGoals)
router.post('/', setGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)
*/

//you can also use .route('/) to check the route 
//before using needed methods. they can be stacked

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router

const router = require('express').Router();

const { 
getThoughts,
createThought, 
getSingleThought,
getThoughtAndUpdate,
deleteThought} = require('../../controllers/thoughtsControllers')

router.route('/').get(getThoughts)

// figure out how to push onto user thoughts array 
// post(createThought)

router.route('/:_id').get(getSingleThought).put(getThoughtAndUpdate).delete(deleteThought);

module.exports = router;
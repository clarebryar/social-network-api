const router = require('express').Router();

const {
    getUsers,
    createUser,
    getSingleUser,
    getUserAndUpdate,
    deleteUser
} = require('../../controllers/userControllers')

router.route('/').get(getUsers).post(createUser);

router.route('/:_id').get(getSingleUser).put(getUserAndUpdate).delete(deleteUser)

module.exports = router;
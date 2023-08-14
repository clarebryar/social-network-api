const router = require('express').Router();

const {
    getUsers,
    createUser,
    getSingleUser,
    getUserAndUpdate,
    deleteUser,
    addNewFriend,
    removeFriend
} = require('../../controllers/userControllers')

router.route('/').get(getUsers).post(createUser);

router.route('/:_id').get(getSingleUser).put(getUserAndUpdate).delete(deleteUser)

// friends
router.route('/:userId/friends/:friendId').post(addNewFriend).delete(removeFriend);

module.exports = router;
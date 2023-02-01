const { addAvatar, getAllAvatar, addToGallery, getAllUsers, destroyAllUsers } = require('../controller/userController')


const router = require('express').Router()
router
    .get('/', getAllAvatar)
    .get('/fetch', getAllUsers)
    .delete('/destroy', destroyAllUsers)
    .post('/add', addAvatar)
    .post('/add-to-gallary', addToGallery)

module.exports = router

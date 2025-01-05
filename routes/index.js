const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

// User Routes
router.get('/users', userController.getAllUsers);

// Post Routes
router.get('/posts', postController.getAllPosts);
router.get('/users/:userId/posts', postController.getUserPosts);
router.post('/users/:userId/posts', postController.createPost);
router.put('/posts/:postId', postController.editPost);
router.delete('/posts/:postId', postController.deletePost);

module.exports = router;
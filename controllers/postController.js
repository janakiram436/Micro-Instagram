
const Post = require('../models/post');
const User = require('../models/user');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ where: { userId: req.params.userId } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, description, images } = req.body;
    const userId = req.params.userId;

    const post = await Post.create({ title, description, images, userId });
    await User.increment('postCount', { where: { id: userId } });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editPost = async (req, res) => {
  try {
    const { title, description, images } = req.body;
    const postId = req.params.postId;

    const post = await Post.update({ title, description, images }, { where: { id: postId } });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    await Post.destroy({ where: { id: postId } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
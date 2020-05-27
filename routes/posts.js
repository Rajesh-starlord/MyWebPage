var express = require('express');
var router = express.Router();
var posts = [
  {
    url:'./images/blog-1.jpg',
    title:'Blog Title',
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor laborum."
  },
  {
    url:'./images/blog-2.jpg',
    title:'Blog Title',
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor laborum."
  },
  {
    url:'./images/blog-3.jpg',
    title:'Blog Title',
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor laborum."
  },
  {
    url:'./images/blog-4.jpg',
    title:'Blog Title',
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor laborum."
  }
]
/* GET post page. */
router.get('/', function(req, res, next) {
  res.render('posts',{title:'Posts',posts:posts});
});

module.exports = router;

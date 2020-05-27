var express = require('express');
var router = express.Router();
var data = [
  {
    url:'./images/manali.jpg',
    place:'Manali'
  },
  {
    url:'./images/travel.jpg',
    place:'Travel'
  },
  {
    url:'./images/college.jpg',
    place:'College'
  },
  {
    url:'./images/hyd.jpg',
    place:'Hyderabad'
  }
]
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
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',{data:data,posts:posts});
});

module.exports = router;

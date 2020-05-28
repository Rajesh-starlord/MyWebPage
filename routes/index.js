var express = require('express');
var router = express.Router();
var data = [
  {
    url:'./images/manali.JPG',
    place:'Manali'
  },
  {
    url:'./images/travel.JPG',
    place:'Travel'
  },
  {
    url:'./images/college.JPG',
    place:'College'
  },
  {
    url:'./images/hyd.JPG',
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
/*"Live your truth. Express your love. 
Share your enthusiasm.
Take action towards your dreams.
Walk your talk.
Dance and sing to your music.
Embrace your blessings.
Make today worth remembering.”*/

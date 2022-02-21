import React from 'react'
import Post from './Post'
import img from '../images/profile-picture.png'
const posts = [
  {
    id: '123',
    username: 'Santi',
    userImg: img.src,
    img: img.src,
    caption: 'Subscribe and destroy the like button for the IG algorith!',
  },
  {
    id: '123',
    username: 'Santi',
    userImg: img.src,
    img: img.src,
    caption: 'Subscribe and destroy the like button for the IG algorith!',
  },
  {
    id: '123',
    username: 'Santi',
    userImg: img.src,
    img: img.src,
    caption: 'Subscribe and destroy the like button for the IG algorith!',
  },
  {
    id: '123',
    username: 'Santi',
    userImg: img.src,
    img: img.src,
    caption: 'Subscribe and destroy the like button for the IG algorith!',
  },
  {
    id: '123',
    username: 'Santi',
    userImg: img.src,
    img: img.src,
    caption: 'Subscribe and destroy the like button for the IG algorith!',
  },
]
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts

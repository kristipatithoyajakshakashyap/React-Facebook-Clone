import React,{ useState, useEffect } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';
import db from './Firebase';

function Feed(){
  const [posts,setPosts]= useState([]);

  useEffect(() =>{
    db.collection("posts")
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({id: doc.id,
         data: doc.data() })))
       );
  }, [posts]);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      {/* <Post
      profilePic="https://i.pinimg.com/originals/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg"
      message='wow this works'
      timestamp='This is a timestamp'
      username='Kashyap'
      image='https://code.org/shared/images/social-media/codeorg2019_social.png'
    /> */}

    </div>
  );
}

export default Feed;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import About from './pages/About';

function App() {
  const [localPosts, setLocalPosts] = useLocalStorage('community_posts', []);

  const handleAddPost = (newPost) => {
    setLocalPosts([newPost, ...localPosts]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts localPosts={localPosts} />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePost onAddPost={handleAddPost} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

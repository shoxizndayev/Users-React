import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from "../../Pages/Home";
import Posts from "../../Pages/Posts";
import Comments from "../../Pages/Comments";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:userId" element={<Posts />} />
      <Route path="/comments/:postId" element={<Comments />} />
    </Routes>
  );
}

export default AuthenticatedApp; 
import React, { useState } from 'react'

const PostCard = ({ post, user, deletePost, likePost }) => {

   const [showAll, setShowAll] = useState(0);
   const [showReply, setShowReply] = useState(0);
   const [comments, setComments] = useState([]);
   const [loading, setLoading] = useState(false);
   const [replyComments, setReplyComments] = useState(0);
   const [showComments, setShowComments] = useState(0);

  return (
    <div></div>
  )
}

export default PostCard
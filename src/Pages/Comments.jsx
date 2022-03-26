import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import  "./comments.scss"

const Comments = () => {
  const { postId } = useParams();
  const [comments, setCommnets] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?postId=" + postId
      );

      const data = await response.json();

      if (data) {
        setCommnets(data);
      }
    })();
  }, [postId]);

  return (
    <main>
      <button onClick={() => navigate(-1)}>back</button>

      <ul className="comments__list">
        {comments &&
          comments.map((comment) => (
            <li key={comment.id} className="comments__item">
              <h3>{comment.title}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Comments;
import './postItem.css';

function PostItem({ title, body }) {
  return (
    <div className="post-item">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default PostItem;

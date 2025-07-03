import { useParams } from 'react-router-dom';
import posts from '../../static/posts.json';
import Post from '../../components/Post/Post';

function PostDetails() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <p>Post not found.</p>;

  return (
    <Post
      title={post.title}
      date={post.date}
      post_content={post.post_content}
      image={post.image}
    />
  );
}

export default PostDetails;
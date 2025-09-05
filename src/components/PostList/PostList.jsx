import { useState, useEffect} from 'react';
import { fetchPosts } from '../../api/postsApi';
import PostItem from '../PostItem/PostItem';
import SearchBar from '../SearchBar/SearchBar';
import './postList.css';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchPosts()
        .then(data => {
          setPosts(data);
          setFilteredPosts(data);
        })
        .catch(() => {
          setError('Failed to load posts');
        });
    }, []);

    useEffect(() => {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(filtered);
    }, [search, posts]);

    return (
      <div className="post-list-container">
        <SearchBar value={search} onChange={setSearch} />
        {error && <p className="error">{error}</p>}
        {!error && (
          <div className="post-items">
            {filteredPosts.map(post => (
              <PostItem key={post.id} title={post.title} body={post.body} />
            ))}
          </div>
        )}
      </div>
    );
}

export default PostList;
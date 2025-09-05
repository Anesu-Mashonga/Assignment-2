export const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Sorry, couldnt fetch posts');
  }
  return res.json();
}
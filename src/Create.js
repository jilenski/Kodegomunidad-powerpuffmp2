import "./create.css"
import { useState } from "react";
import useFetch from "./useFetch";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState (false);
  const { data, error, loading, request } = useFetch('/api/blogs');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch ('http://localhost:3000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then (() => {
      console.log ('new blog added');
setIsPending (false);
    })
  }

  return (
    <div className="create">
      <h2> Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label> Blog Title </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label> Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Blog Author: </label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario"> mario </option>
          <option value="yoshi"> yoshi </option>
        </select>
        <button disabled={loading}> Add Blog </button>
      </form>
    </div>
  );
};

export default Create;
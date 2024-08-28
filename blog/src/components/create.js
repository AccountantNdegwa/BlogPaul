// src/BlogForm.js
import React from 'react';

const BlogForm = () => {
  return (
    <form>
      <div>
        <label>
          Title:
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Body:
          <textarea />
        </label>
      </div>
      <button type="submit">Save Blog</button>
    </form>
  );
};

export default BlogForm;

import React from 'react';

function BlogPost({blog, authors}) {
  const author = authors.find(x => x.id === blog.aId);
  return (
    <div className="blog-post">
      <img src={`${process.env.PUBLIC_URL + blog.img}`} alt="" />
      <h3>{blog.title}</h3>
      <div className="blog-metas">
        <div className="blog-meta author">
          <div className="post-author set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + author.img})`}}></div>
          <a href="/">{author.name}</a>
        </div>
        <div className="blog-meta">
          <a href="/">{author.work}</a>
        </div>
        <div className="blog-meta">
          <a href="/">{blog.month} {blog.date}, {blog.year}</a>
        </div>
        <div className="blog-meta">
          <a href="/">{blog.commentCount} Comments</a>
        </div>
      </div>
      <p>{blog.text} </p>
      <a href="/" className="site-btn readmore">Read More</a>
    </div>
  );
}

export default BlogPost;
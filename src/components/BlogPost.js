import React from 'react';

function BlogPost({
  bImg, 
  bTitle, 
  aImg, 
  aName, 
  aWork, 
  bDate, 
  bMonth, 
  bYear, 
  bCommentCount, 
  bText
  }) {
  return (
    <div className="blog-post">
      <img src={`${process.env.PUBLIC_URL + bImg}`} alt="" />
      <h3>{bTitle}</h3>
      <div className="blog-metas">
        <div className="blog-meta author">
          <div className="post-author set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + aImg})`}}></div>
          <a href="/">{aName}</a>
        </div>
        <div className="blog-meta">
          <a href="/">{aWork}</a>
        </div>
        <div className="blog-meta">
          <a href="/">{bMonth} {bDate}, {bYear}</a>
        </div>
        <div className="blog-meta">
          <a href="/">{bCommentCount} Comments</a>
        </div>
      </div>
      <p>{bText} </p>
      <a href="/" className="site-btn readmore">Read More</a>
    </div>
  );
}

export default BlogPost;
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import BlogPost from '../components/BlogPost';

function Blog({blogs, authors}) {
  const post = blogs.map((blog) =>  <BlogPost key={blog.id} blog={blog} authors={authors} /> );
  return(
    <section className="blog-page spad pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {post}
            <Pagination className="site-pagination" count={3} color="primary" />
          </div>
          <div className="col-lg-3 col-md-5 col-sm-9 sidebar">
            <div className="sb-widget-item">
              <form className="search-widget">
                <input type="text" placeholder="Search" />
                <button><i className="fa fa-search"></i></button>
              </form>
            </div>
            <div className="sb-widget-item">
              <h4 className="sb-w-title">Categories</h4>
              <ul>
                <li><a href="/">Developement</a></li>
                <li><a href="/">Social Media</a></li>
                <li><a href="/">Press</a></li>
                <li><a href="/">Events & Lifestyle</a></li>
                <li><a href="/">Uncategorizes</a></li>
              </ul>
            </div>
            <div className="sb-widget-item">
              <h4 className="sb-w-title">Archives</h4>
              <ul>
                <li><a href="/">February 2018</a></li>
                <li><a href="/">March 2018</a></li>
                <li><a href="/">April 2018</a></li>
                <li><a href="/">May 2018</a></li>
                <li><a href="/">June 2018</a></li>
              </ul>
            </div>
            <div className="sb-widget-item">
              <h4 className="sb-w-title">Archives</h4>
              <div className="tags">
                <a href="/">education</a>
                <a href="/">courses</a>
                <a href="/">development</a>
                <a href="/">design</a>
                <a href="/">on line courses</a>
                <a href="/">wp</a>
                <a href="/">html5</a>
                <a href="/">music</a>
              </div>
            </div>
            <div className="sb-widget-item">
              <div className="add">
                <a href="/"><img src={`${process.env.PUBLIC_URL + "/assets/img/add.jpg"}`} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
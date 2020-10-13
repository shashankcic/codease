import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import BlogPost from './BlogPost';

function Blog() {
  return(
    <section className="blog-page spad pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {/* blog post */}
            <BlogPost
              bImg="/assets/img/blog/1.jpg"
              bTitle="How to create the perfect resume"
              aImg="/assets/img/authors/bhanu.jpg"
              aName="Bhanu Mittal"
              aWork="Development"
              bDate={12}
              bMonth="June"
              bYear={2018}
              bCommentCount={2}
              bText="Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna."
            />
            <BlogPost
              bImg="/assets/img/blog/2.jpg"
              bTitle="5 Tips to make money from home"
              aImg="/assets/img/authors/aastha.jpg"
              aName="Aastha Shruti"
              aWork="Moneymaker"
              bDate={16}
              bMonth="May"
              bYear={2019}
              bCommentCount={4}
              bText="Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna."
            />
            <BlogPost
              bImg="/assets/img/blog/3.jpg"
              bTitle="Why choose an online course?"
              aImg="/assets/img/authors/devansh.jpg"
              aName="Devansh Gupta"
              aWork="Development"
              bDate={23}
              bMonth="Nov"
              bYear={2019}
              bCommentCount={6}
              bText="Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna."
            />
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
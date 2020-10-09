import React from 'react';

function Courses() {
  return (
    <section className="course-section spad">
      <div className="container">
        <div className="section-title mb-0">
          <h2>Featured Courses</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
        </div>
      </div>
      <div className="course-warp">
        <ul className="course-filter controls">
          <li className="control active" data-filter={`all`}>All</li>
          <li className="control" data-filter={`.beginner`}>Beginner</li>
          <li className="control" data-filter={`.intermediate`}>Intermediate</li>
          <li className="control" data-filter={`.advanced`}>Advanced</li>
        </ul>                                       
        <div className="row course-items-area">
          {/* course */}
          <div className="mix col-lg-3 col-md-4 col-sm-6 beginner">
            <div className="course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/courses/c++.png`})`}}>
                <div className="price">Price: $0</div>
              </div>
              <div className="course-info">
                <div className="course-text">
                  <h5>C++</h5>
                  <p>Beginner</p>
                  <div className="students">50 minutes</div>
                </div>
                <div className="course-author">
                  <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/authors/bhanu.jpg`})`}}></div>
                  <p>Bhanu Mittal, <span>Developer</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* course */}
          <div className="mix col-lg-3 col-md-4 col-sm-6 intermediate">
            <div className="course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/courses/c++.png`})`}}>
                <div className="price">Price: $0</div>
              </div>
              <div className="course-info">
                <div className="course-text">
                  <h5>C++</h5>
                  <p>Intermediate</p>
                  <div className="students">3 hours</div>
                </div>
                <div className="course-author">
                  <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/authors/devansh.jpg`})`}}></div>
                  <p>Devansh Gupta, <span>Developer</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* course */}
          <div className="mix col-lg-3 col-md-4 col-sm-6 beginner">
            <div className="course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/courses/java.png`})`}}>
                <div className="price">Price: $0</div>
              </div>
              <div className="course-info">
                <div className="course-text">
                  <h5>Java</h5>
                  <p>Beginner</p>
                  <div className="students">6 hours</div>
                </div>
                <div className="course-author">
                  <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/authors/kirti.jpg`})`}}></div>
                  <p>Kirti Panwar, <span>Developer</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* course */}
          <div className="mix col-lg-3 col-md-4 col-sm-6 advanced">
            <div className="course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/courses/java.png`})`}}>
                <div className="price">Price: $0</div>
              </div>
              <div className="course-info">
                <div className="course-text">
                  <h5>Java</h5>
                  <p>Advanced</p>
                  <div className="students">6 hours</div>
                </div>
                <div className="course-author">
                  <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/authors/aastha.jpg`})`}}></div>
                  <p>Aastha Shruti, <span>Developer</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* course */}
          <div className="mix col-lg-3 col-md-4 col-sm-6 intermediate">
            <div className="course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/courses/python.png`})`}}>
                <div className="price">Price: $0</div>
              </div>
              <div className="course-info">
                <div className="course-text">
                  <h5>Python</h5>
                  <p>Intermediate</p>
                  <div className="students">2 hours</div>
                </div>
                <div className="course-author">
                  <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/authors/kirti.jpg`})`}}></div>
                  <p>Kirti Panwar, <span>Developer</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* course */}
          <div className="mix col-lg-3 col-md-4 col-sm-6 advanced">
            <div className="course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/courses/python.png`})`}}>
                <div className="price">Price: $0</div>
              </div>
              <div className="course-info">
                <div className="course-text">
                  <h5>Python</h5>
                  <p>Advanced</p>
                  <div className="students">4 hours</div>
                </div>
                <div className="course-author">
                  <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/authors/bhanu.jpg`})`}}></div>
                  <p>Bhanu Mittal, <span>Developer</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* course */}
          <div className="mix col-lg-3 col-md-4 col-sm-6 beginner">
            <div className="course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/courses/js.png`})`}}>
                <div className="price">Price: $0</div>
              </div>
              <div className="course-info">
                <div className="course-text">
                  <h5>JavaScript</h5>
                  <p>Beginner</p>
                  <div className="students">1 hour</div>
                </div>
                <div className="course-author">
                  <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/authors/aastha.jpg`})`}}></div>
                  <p>Aastha Shruti, <span>Developer</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* course */}
          <div className="mix col-lg-3 col-md-4 col-sm-6 advanced">
            <div className="course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/courses/js.png`})`}}>
                <div className="price">Price: $0</div>
              </div>
              <div className="course-info">
                <div className="course-text">
                  <h5>JavaScript</h5>
                  <p>Advanced</p>
                  <div className="students">4 hours</div>
                </div>
                <div className="course-author">
                  <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/authors/shashank.jpg`})`}}></div>
                  <p>Shashank, <span>Developer</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
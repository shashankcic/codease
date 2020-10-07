import React from 'react';

function Signup() {
  return (
    <section className="signup-section spad">
      <div className="signup-bg set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/signup-bg.jpg`})`}}></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="signup-warp">
              <div className="section-title text-white text-left">
                <h2>Sign up to became a teacher</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
              </div>
              {/* signup form */}
              <form className="signup-form">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your E-mail" />
                <input type="text" placeholder="Your Phone" />
                <label for="v-upload" className="file-up-btn">Upload Course</label>
                <input type="file" id="v-upload" />
                <button className="site-btn">Search Couse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
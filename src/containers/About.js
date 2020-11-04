import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function About() {
  return (
    <section className="about-section container">
      <div className="about-organisation row justify-content-center align-items-center">
        <div className="col-10 grid-item">
          <h4>
            About The Organisation
          </h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
          </p>
        </div>
      </div>
      <div className="goals-organisation row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 grid-item">
          <span>About Us</span>
          <br />
          <h4>Our goals</h4>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 grid-item">
          <Card>
            <CardMedia>
              <img src={`${process.env.PUBLIC_URL + '/assets/img/blog/1.jpg'}`} alt='' />
            </CardMedia>
          </Card>
        </div>
      </div>
      <div className="team-organisation row justify-content-center align-items-center">
        <div className="col-10 grid-item">
          <span>Meet Our Team</span>
          <br />
          <h4>The Team</h4>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
          <Card>
            <CardMedia className="col-8 member-img-card">
              <img src={`${process.env.PUBLIC_URL + '/assets/img/authors/bhanu.jpg'}`} alt="Bhanu Mittal"  className="member-img" />
            </CardMedia>
            <CardContent>
              <h4>Bhanu Mittal</h4>
              <br />
              <span>He's the project manager and part time billionaire</span>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
          <Card>
            <CardMedia className="col-8 member-img-card">
              <img src={`${process.env.PUBLIC_URL + '/assets/img/authors/devansh.jpg'}`} alt="Devansh Gupta" className="member-img" />
            </CardMedia>
            <CardContent>  
              <h4>Devansh Gupta</h4>
              <br />
              <span>He's the tester and part time poor joke maker</span>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
          <Card>
            <CardMedia className="col-8 member-img-card">
              <img src={`${process.env.PUBLIC_URL + '/assets/img/authors/kirti.jpg'}`} alt="Kirti Panwar" className="member-img" />
            </CardMedia>
            <CardContent>
              <h4>Kirti Panwar</h4>
              <br />
              <span>She's the requirements analyst and part time zombie</span>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
          <Card>
            <CardMedia className="col-8 member-img-card">
              <img src={`${process.env.PUBLIC_URL + '/assets/img/authors/aastha.jpg'}`} alt="Aastha Shruti" className="member-img" />
            </CardMedia>
            <CardContent>
              <h4>Aastha Shruti</h4>
              <br />
              <span>She's the designer and part time moneymaker</span>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
          <Card>
            <CardMedia className="col-8 member-img-card">
              <img src={`${process.env.PUBLIC_URL + '/assets/img/authors/shashank.jpg'}`} alt="Shashank Singh" className="member-img" />
            </CardMedia>
            <CardContent>
              <h4>Shashank Singh</h4>
              <br />
              <span>He's the developer and full time nice guy</span>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mission-organisation row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 grid-item">
          <Card>
            <CardMedia>
              <img src={`${process.env.PUBLIC_URL + '/assets/img/blog/2.jpg'}`} alt='' />
            </CardMedia>
          </Card>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 grid-item">
          <span>Why Founded</span>
          <br />
          <h4>Mission and Vision</h4>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
        </div>
      </div>
    </section>
  );
}

export default About;